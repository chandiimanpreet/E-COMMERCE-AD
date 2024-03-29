'use client';

import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
    data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for you store"
            />
            <Separator />
            <DataTable searchKey="products" columns={columns} data={data} />
        </>
    )
}