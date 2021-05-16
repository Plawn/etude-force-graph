import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { DocumentType } from "../data/document-type/type";
import { Document } from "../data/document/type";


type Props = {
    documentType: DocumentType;
}

export default function DocumentTypeRenderer({ documentType }: Props) {
    return (
        <Card>
            <CardHeader
                title={`Document-type: ${documentType.value}`}
                subheader={documentType.subValue}
            />
            <CardContent>
                <Typography>
                    Type : {documentType.extension}
                    <br />
                    Pattern : {documentType.referencePattern}
                    <br />
                    Requiert une siganture: {documentType.signature ? "Oui" : "Non"}
                </Typography>
            </CardContent>
        </Card>
    )
}