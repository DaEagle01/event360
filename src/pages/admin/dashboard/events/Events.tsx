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
import { TEvent, TEventDataInput } from '@/types/Event';

const Events = () => {
    const { isDialogOpen, openDialog, closeDialog, defaultState } = useDialogState();
    const defData: TEvent = defaultState as TEvent;
    const [eventData, setEventData] = useState<TEventDataInput>({
        title: "",
        image: "",
    })
    const { data: events, isLoading } = useGetEvents()
    const [dummyData] = useState<TEventDataInput[]>([{ title: "", image: "", }])
    const queryClient = useQueryClient();
    const { mutateAsync: postEvent } = useMutation({
        mutationFn: async (data: TEventDataInput) => {
            return axios.post('https://event360-eta.vercel.app/api/v1/events', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['events'] })
        }
    })

    const { mutateAsync: updateEvent } = useMutation({
        mutationFn: (data: TEvent) => {
            return axios.patch(`https://event360-eta.vercel.app/api/v1/events/${data._id}`, eventData)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['events'] })
        }
    })

    useEffect(() => {
        if (defData?.title) {
            setEventData({ title: defData.title, image: defData.image });
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
        await updateEvent(defData);
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
                            <DialogTitle>{defData?.title ? "Update" : "Add"} Event</DialogTitle>
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
                                    className="col-span-3"
                                    placeholder='Paste the image link'
                                    value={eventData.image}
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
                                <Button type="submit" onClick={defData?.title ? handleUpdate : handleSubmit} className='mb-4 sm:mb-0'>
                                    {defData?.title ? "Update Event" : "Add Event"}
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