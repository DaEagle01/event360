import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDialogState } from '@/hooks/useDialogState'
import { Minus, Plus } from 'lucide-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ServicesTable } from './ServicesTable'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useGetServices } from '@/api/admin/service/service.hook'
import axios from 'axios'
import { TService, TServiceInput } from '@/types/Service'

const Services = () => {
    const { isDialogOpen, openDialog, closeDialog, defaultState } = useDialogState();
    const defData: TService = defaultState as TService;
    const [features, setFeatures] = useState(['']);
    const [services, setServices] = useState({
        name: "",
        description: "",
        image: ""
    })
    const { data: servicesList, isLoading } = useGetServices()
    const [dummyData] = useState([{
        name: "",
        description: "",
        image: "",
        features: [""]
    }])
    const queryClient = useQueryClient();
    const { mutateAsync: postService } = useMutation({
        mutationFn: (data: TServiceInput) => {
            return axios.post('https://event360-eta.vercel.app/api/v1/services', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] })
        }
    })
    const { mutateAsync: updateService } = useMutation({
        mutationFn: (data: TService) => {
            return axios.patch(`https://event360-eta.vercel.app/api/v1/services/${data._id}`, { ...services, features })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] })
        }
    })

    useEffect(() => {
        if (defData?.name) {
            setServices(defData)
            setFeatures(defData.features)
        }
    }, [defaultState])

    const handleServicesInput = (e: ChangeEvent<HTMLInputElement>) => {
        setServices({ ...services, [e.target.name]: e.target.value })
    };

    const handleFeatures = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const newFeatures = [...features];
        newFeatures[index] = e.target.value;
        setFeatures(newFeatures);
    };

    const handleRemoveFeature = (index: number) => {
        const newFeatures = [...features];
        newFeatures.splice(index, 1);
        setFeatures(newFeatures);
    };

    const handleAddFeature = () => {
        setFeatures([...features, '']);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await postService({ ...services, features });
        closeDialog();
        setServices({ name: "", description: "", image: "" });
        setFeatures([""]);
    };

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        await updateService(defData);
        closeDialog();
        setServices({ name: "", description: "", image: "" });
        setFeatures([""]);
    };

    return (
        <div className='bg-white font-roboto px-4 py-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <p className='text-xl font-semibold text-gray-700 '>
                    Services
                </p>
                <Button onClick={openDialog}>
                    Add Service
                </Button>
                <Dialog open={isDialogOpen}>
                    <DialogContent className="w-[95%] sm:max-w-[525px] max-h-[90vh] overflow-scroll overflow-x-hidden rounded-lg">
                        <DialogHeader>
                            <DialogTitle>{defData?.name ? "Update" : "Add"} Service</DialogTitle>
                            <DialogDescription>
                                Make sure to add all details about this service.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="">
                                    Name
                                </Label>
                                <Input
                                    name='name'
                                    className="col-span-3"
                                    placeholder='Service Name'
                                    maxLength={20}
                                    value={services.name}
                                    onChange={handleServicesInput}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="">
                                    Description
                                </Label>
                                <Input
                                    name="description"
                                    className="col-span-3"
                                    placeholder='Service Description'
                                    maxLength={230}
                                    value={services.description}
                                    onChange={handleServicesInput}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="image" className="">
                                    Image
                                </Label>
                                <Input
                                    name="image"
                                    className="col-span-3"
                                    placeholder='Paste the image link'
                                    value={services.image}
                                    onChange={handleServicesInput}
                                />
                            </div>
                            {features?.map((feature, index) => (
                                <div key={index} className="grid grid-cols-12 items-center gap-2">
                                    <Label className="col-span-3" htmlFor="features" >
                                        {index === 0 && "Features"}
                                    </Label>
                                    <Input
                                        id="features"
                                        className="col-span-8"
                                        key={index}
                                        type="text"
                                        placeholder={`Feature ${index + 1}`}
                                        value={feature}
                                        maxLength={30}
                                        onChange={(event) => handleFeatures(index, event)}
                                    />
                                    {
                                        index === features.length - 1 ? (
                                            <Button className="col-span-1 rounded-full h-8 w-8" size="icon" type="button" onClick={handleAddFeature}>
                                                <Plus size={20} strokeWidth={3} />
                                            </Button>
                                        ) : (
                                            <Button className="col-span-1 rounded-full h-8 w-8" size="icon" type="button" onClick={() => handleRemoveFeature(index)}>
                                                <Minus size={20} strokeWidth={3} />
                                            </Button>
                                        )
                                    }
                                </div>
                            ))}
                            <DialogFooter className='pt-8'>
                                <DialogClose>
                                    <DialogClose asChild className='w-full sm:max-w-max'>
                                        <Button variant="outline" onClick={closeDialog}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                </DialogClose>
                                <Button type="submit" onClick={defData?.name ? handleUpdate : handleSubmit} className='mb-4 sm:mb-0'>
                                    {defData?.name ? "Update Service" : "Add Service"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div>
                <ServicesTable data={servicesList || dummyData} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Services;