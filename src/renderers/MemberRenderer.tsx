import { Card, CardHeader } from "@material-ui/core";
import React from "react";
import { Member } from "../data/member/type";
import StudentRenderer from "./StudentRenderer";


type Props = {
    member: Member;
}

export default function MemberRenderer(props: Props) {
    return (
        <StudentRenderer student={props.member.student} />
    )
}