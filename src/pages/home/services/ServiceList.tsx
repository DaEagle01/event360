import { useGetServices } from "@/api/admin/service/service.hook"
import Service from "./Service"
import { TService } from "@/types/Service"

const ServiceList = () => {
    const { data: services, isLoading } = useGetServices()
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">
                {!isLoading && services.map((service: TService) => (
                    <Service key={service._id} name={service.name} image={service.image} features={service.features} description={service.description} />
                ))}
            </div>
        </div>
    )
}

export default ServiceList