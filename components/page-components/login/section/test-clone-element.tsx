"use client";

import Column from "@/components/reusable-components/column";
import {
    Children,
    isValidElement,
    cloneElement,
    ReactNode,
    useState,
} from "react";

export default function TestCloneElement({
    children,
}: {
    children: ReactNode;
}) {
    const [refKeys, setRefKeys] = useState(0);

    const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement(child) && typeof child.type !== "string") {
            return cloneElement(child as React.ReactElement<any>, {
                key: refKeys,
                refKeys,
            });
        }

        return child;
    });

    return (
        <Column className="mt-2 rounded-md bg-red-50 p-4">
            <h1>This is Parent Clone</h1>
            <button onClick={() => setRefKeys((prev) => prev + 1)}>Add</button>
            {childrenWithProps}
        </Column>
    );
}

export const TextClone = ({ ...props }) => {
    return <span>Cloned Text {props.refKeys}</span>;
};
