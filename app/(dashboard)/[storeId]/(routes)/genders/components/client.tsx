'use client';

import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
 
import { GenderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface GendersClientProps {
    data: GenderColumn[];
}

export const GendersClient: React.FC<GendersClientProps> = ({
    data
}) => {

    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Genders (${data.length})`}
                    description="Manage genders for you store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/genders/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API calls for Genders" />
            <Separator />
            <ApiList entityName="genders" entityIdName="genderId" />
        </>
    )
}