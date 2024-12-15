import { useState } from "react";

export default function useCustomDialogError() {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");

    return { open, setOpen, error, setError } as const;
}
