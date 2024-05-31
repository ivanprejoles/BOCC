import { Button } from "@/components/ui/button";
import React from "react";

export interface MainButtonType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (e: any) => void,
    children?: string,
    variant?: 'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'|'success'
}

export function MainButton({ onClick, children, variant }: MainButtonType) {
    return <Button className="py-0  w-full" variant={variant} onClick={onClick}>{children}</Button>;
}