import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Document } from "../data/document/type";
import { ValidationType } from "../data/validation-type/type";


type Props = {
    validationType: ValidationType;
}

export default function ValidationTypeRenderer({ validationType }: Props) {
    return (
        <Card>
            <CardHeader 
                title={"Validation-type: " + validationType.value} 
                subheader={validationType.role} 
            />
            <CardContent>
                <Typography>
                    Alias: {validationType.mailAlias}
                </Typography>
            </CardContent>
        </Card>
    )
}