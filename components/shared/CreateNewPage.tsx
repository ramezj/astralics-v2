"use client"
import { useState } from "react"
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Loader2 } from "lucide-react"
import { CreatePage } from "@/actions/page/CreatePage";

export function CreateNewPage() {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ name, setName ] = useState<string>('');
    const [ subdomain, setSubdomain ] = useState<string>('');
    const [ website, setWebsite ] = useState<string>('');
    const CreateUserPage = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        const res = await CreatePage(name, subdomain, website);
        console.log(res);
    }
    return (
        <>
        <Dialog>
            <DialogTrigger asChild className="w-full">
            <Button>
                <Plus className="w-4 h-4 mr-2"/>
                Create New Page
            </Button> 
            </DialogTrigger>
            <DialogContent className='md:w-full w-[90%] rounded-md'>
            <DialogHeader>
            <DialogTitle className="text-left">Create Page</DialogTitle>
            <br />
            <form onSubmit={CreateUserPage}>
                <div className="grid gap-5">
                <div className="grid gap-3">
                    <Label className="text-left">Name</Label>
                    <Input placeholder="Astralics 🚀" required value={name} onChange={((e) => {setName(e.target.value)})} />
                </div>
                <div className="grid gap-3">
                    <Label className="text-left">Slug</Label>
                    <Input placeholder="slug.astralics.com" required value={subdomain} onChange={((e) => {setSubdomain(e.target.value)})}/>
                </div>
                <div className="grid gap-3">
                    <Label className="text-left">Website</Label>
                    <Input placeholder="astralics.com" required value={website} onChange={((e) => {setWebsite(e.target.value)})} />
                </div>
                {
                    loading
                    ? 
                    <>
                    <Button disabled className="w-full">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Deploy Page 🚀
                    </Button>
                    </>
                    :
                    <>
                    <Button type="submit" className="w-full">Deploy Page 🚀</Button>
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