import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import { Document } from "../data/document/type";


type Props = {
    document: Document;
}

export default function DocumentRenderer({ document }: Props) {
    return (
        <Card>
            <CardHeader 
                title={"Document: " + document.id} 
                subheader={document.type.value} 
            />
            <CardContent>
                Signé le : {document.signedAt}
            </CardContent>
        </Card>
    )
}