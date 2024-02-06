import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDialogState } from '@/hooks/useDialogState';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { EventsTable } from './EventsTable';
import { useGetEvents } from '@/api/admin/event/event.hook';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const Events = () => {
    const { isDialogOpen, openDialog, closeDialog, defaultState } = useDialogState();
    const [eventData, setEventData] = useState({
        title: "",
        image: "",
    })
    const { data: events, isLoading, isError } = useGetEvents()
    const [dummyData] = useState([{ title: "", image: "", }])
    const queryClient = useQueryClient();
    const { mutateAsync: postEvent } = useMutation({
        mutationFn: async (data) => {
            return axios.post('https://event360-eta.vercel.app/api/v1/events', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['events'] })
        }
    })

    const { mutateAsync: updateEvent } = useMutation({
        mutationFn: ({ id, data }) => {
            return axios.patch(`https://event360-eta.vercel.app/api/v1/events/${id}`, data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['events'] })
        }
    })

    useEffect(() => {
        if (defaultState) {
            setEventData(defaultState)
        }
    }, [defaultState])

    const handleServicesInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await postEvent(eventData);
        closeDialog();
        setEventData({ title: "", image: "", });
    };


    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        await updateEvent({ id: defaultState?._id, data: eventData });
        closeDialog();
        setEventData({ title: "", image: "", });
    };

    return (
        <div className='bg-white font-roboto px-4 py-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <p className='text-xl font-semibold text-gray-700 '>
                    Events
                </p> <Button onClick={openDialog}>
                    Add Event
                </Button>
                <Dialog open={isDialogOpen}>
                    <DialogContent className="w-[95%] sm:max-w-[525px] max-h-[90vh] overflow-scroll overflow-x-hidden">
                        <DialogHeader>
                            <DialogTitle>{defaultState?.title ? "Update" : "Add"} Event</DialogTitle>
                            <DialogDescription>
                                Make sure to add all details about this service.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="">
                                    Title
                                </Label>
                                <Input
                                    name='title'
                                    className="col-span-3"
                                    placeholder='Event title'
                                    maxLength={20}
                                    value={eventData.title}
                                    onChange={handleServicesInput}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="image" className="">
                                    Image
                                </Label>
                                <Input
                                    name="image"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                    placeholder='Paste the image link'
                                    value={eventData.image}
                                    onChange={handleServicesInput}
                                />
                            </div>
                            <DialogFooter className='pt-8'>
                                <DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="outline" onClick={closeDialog}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                </DialogClose>
                                <Button type="submit" onClick={defaultState?.title ? handleUpdate : handleSubmit}>
                                    {defaultState?.title ? "Update Event" : "Add Event"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div>
                <EventsTable data={events || dummyData} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Events