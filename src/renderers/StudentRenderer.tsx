import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import { Document } from "../data/document/type";
import { Student } from "../data/student/type";
import AdressDetails from "./addressDetails";


type Props = {
    student: Student;
}

export default function StudentRendere({ student }: Props) {
    return (
        <Card>
            <CardHeader 
                title={`${student.firstName} ${student.lastName} `} 
                // subheader={document.type.value} 
            />
            <CardContent>
                <AdressDetails address={student.address} city={student.city} zipCode={student.zipCode} />
            </CardContent>
        </Card>
    )
}