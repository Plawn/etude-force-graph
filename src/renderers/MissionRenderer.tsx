import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import { Mission } from "../data/mission/type";



type Props = {
    mission: Mission;
}

export default function MissionRenderer({ mission }: Props) {
    return (
        <Card>
            <CardHeader 
                title={`${mission.name}`} 
                subheader={mission.description} 
            />
            {/* <CardContent>
                Addresse: {student.address}
            </CardContent> */}
        </Card>
    )
}