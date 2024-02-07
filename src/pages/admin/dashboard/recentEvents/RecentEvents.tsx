import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDialogState } from '@/hooks/useDialogState';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { RecentEventsTable } from './RecentEventsTable';
import { useGetRecentEvents } from '@/api/admin/recentEvent/recentEvent.hook';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { TRecentEvent, TRecentEventInput } from '@/types/RecentEvents';

const RecentEvents = () => {
    const { isDialogOpen, openDialog, closeDialog, defaultState } = useDialogState();
    const defData: TRecentEvent = defaultState as TRecentEvent;
    const [recentEventData, setRecentEventData] = useState({ image: "" })
    const { data: recentEvents, isLoading } = useGetRecentEvents()
    const [dummyData] = useState([{ image: "" }])
    const queryClient = useQueryClient();
    const { mutateAsync: postRecentEvent } = useMutation({
        mutationFn: async (data: TRecentEventInput) => {
            return axios.post('https://event360-eta.vercel.app/api/v1/recentEvents', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recentEvents'] })
        }
    })

    const { mutateAsync: updateRecentEvent } = useMutation({
        mutationFn: (data: TRecentEvent) => {
            return axios.patch(`https://event360-eta.vercel.app/api/v1/recentEvents/${data._id}`, recentEventData)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recentEvents'] })
        }
    })

    useEffect(() => {
        if (defData?.image) {
            setRecentEventData({ image: defData.image })
        }
    }, [defaultState])

    const handleServicesInput = (e: ChangeEvent<HTMLInputElement>) => {
        setRecentEventData({ ...recentEventData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await postRecentEvent(recentEventData);
        closeDialog();
        setRecentEventData({ image: "", });
    };

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        await updateRecentEvent(defData);
        closeDialog();
        setRecentEventData({ image: "", });
    };

    return (
        <div className='bg-white font-roboto px-4 py-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <p className='text-xl font-semibold text-gray-700 '>
                    Recent Events
                </p> <Button onClick={openDialog}>
                    Add Recent Event
                </Button>
                <Dialog open={isDialogOpen}>
                    <DialogContent className="w-[95%] sm:max-w-[525px] max-h-[90vh] overflow-scroll overflow-x-hidden">
                        <DialogHeader>
                            <DialogTitle>{defData?.image ? "Update" : "Add"} Recent Event</DialogTitle>
                            <DialogDescription>
                                Make sure to add all details about this service.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="image" className="">
                                    Image
                                </Label>
                                <Input
                                    name="image"
                                    className="col-span-3"
                                    placeholder='Paste the image link'
                                    value={recentEventData.image}
                                    onChange={handleServicesInput}
                                />
                            </div>
                            <DialogFooter className='pt-8'>
                                <DialogClose>
                                    <DialogClose asChild className='w-full sm:max-w-max'>
                                        <Button variant="outline" onClick={closeDialog}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                </DialogClose>
                                <Button type="submit" onClick={defData?.image ? handleUpdate : handleSubmit} className='mb-4 sm:mb-0'>
                                    {defData?.image ? "Update Recent Event" : "Add Recent Event"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div>
                <RecentEventsTable data={recentEvents || dummyData} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default RecentEvents