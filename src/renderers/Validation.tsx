import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import { Mission } from "../data/mission/type";
import { Validation } from "../data/validation/type";



type Props = {
    validation: Validation;
}

export default function ValidationRenderer({ validation }: Props) {
    return (
        <Card>
            <CardHeader 
                title={`Validation ${validation.id}`} 
                // subheader={mission.description} 
            />
            <CardContent>
                Commentaire: {validation.comment}
            </CardContent>
        </Card>
    )
}