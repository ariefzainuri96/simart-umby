"use client";

import Column from "@/components/column";
import CustomTextfield from "@/components/custom-textfield";
import Row from "@/components/row";
import React from "react";
import { twMerge } from "tailwind-merge";
import CustomRadio from "@/components/custom-radio";
import { useProfileInstitusiContext } from "../profile-institusi-provider";

export default function MailConfiguration({
    className,
}: {
    className?: string;
}) {
    const { handleChange, form } = useProfileInstitusiContext();

    return (
        <Column className={twMerge("w-full", className)}>
            <h1 className="poppins600-18">Mail Configuration</h1>

            <Row className="mt-6 w-full gap-6">
                <CustomTextfield
                    label={"Mail Host"}
                    name="mailHost"
                    id="mailHost"
                    value={form.mailHost}
                    onChange={handleChange}
                />
                <CustomTextfield
                    label={"User Name"}
                    name="username"
                    id="username"
                    value={form.username}
                    onChange={handleChange}
                />
            </Row>

            <Row className="mt-6 w-full gap-6">
                <CustomTextfield
                    label={"Password"}
                    name="password"
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <CustomTextfield
                    label={"From"}
                    name="from"
                    id="from"
                    value={form.from}
                    onChange={handleChange}
                />
            </Row>

            <CustomTextfield
                className="mt-6 w-full"
                label={"Address"}
                name="address"
                id="address"
                value={form.address}
                onChange={handleChange}
            />

            <Row className="mt-6 w-full gap-6">
                <CustomTextfield
                    label={"Port"}
                    name="port"
                    id="port"
                    value={form.port}
                    onChange={handleChange}
                />
                <CustomTextfield
                    label={"Driver"}
                    name="driver"
                    id="driver"
                    value={form.driver}
                    onChange={handleChange}
                />
            </Row>

            <Row className="mt-6 w-full gap-6">
                <span className="poppins500-16">Encryption</span>
                <CustomRadio
                    value="TLS"
                    onChange={handleChange}
                    label={"TLS"}
                    checked={form.encryption === "TLS"}
                    id="tls"
                    name="encryption"
                />
                <CustomRadio
                    value="SSL"
                    onChange={handleChange}
                    label={"SSL"}
                    checked={form.encryption === "SSL"}
                    id="ssl"
                    name="encryption"
                />
            </Row>
        </Column>
    );
}
