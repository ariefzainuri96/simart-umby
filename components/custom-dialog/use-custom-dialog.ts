import { useState } from "react";

export default function useCustomDialog() {
    const [open, setOpen] = useState(false);

    return { open, setOpen } as const;
}
