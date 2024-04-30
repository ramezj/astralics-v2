"use client"
import { useState } from "react"
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Loader2 } from "lucide-react"

export function CreateNewPage() {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ name, setName ] = useState<string | null>();
    const [ subdomain, setSubdomain ] = useState<string | null>();
    const CreatePage = async (e:any) => {
        e.preventDefault();
        setLoading(true);
    }
    return (
        <>
        <Dialog>
            <DialogTrigger>
            <Button className="w-[90%]">
                <Plus className="w-4 h-4 mr-2"/>
                Create New Page
            </Button> 
            </DialogTrigger>
            <DialogContent className='md:w-full w-[90%] rounded-md'>
            <DialogHeader>
            <DialogTitle className="text-left">Create Page</DialogTitle>
            <br />
            <form onSubmit={CreatePage}>
                <div className="grid gap-5">
                <div className="grid gap-3">
                    <Label className="text-left">Name</Label>
                    <Input placeholder="Astralics 🚀" />
                </div>
                <div className="grid gap-3">
                    <Label className="text-left">Slug</Label>
                    <Input placeholder="slug.astralics.com" />
                </div>
                <div className="grid gap-3">
                    <Label className="text-left">Website</Label>
                    <Input placeholder="astralics.com" />
                </div>
                {
                    loading
                    ? 
                    <>
                    <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Deploy Page 🚀
                    </Button>
                    </>
                    :
                    <>
                    <Button type="submit">Deploy Page 🚀</Button>
                    </>
                }
                </div>
            </form>
            </DialogHeader>
        </DialogContent>
        </Dialog>
        </>
    )
}