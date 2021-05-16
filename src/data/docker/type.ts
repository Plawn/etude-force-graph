import { Mission } from "../mission/type";

export type DockerImage = {
	infos: string;
	name: string;
};

export type OperationType = "RESTORE" | "BACKUP" | "DELETE" | "CREATE";

export type BasicDockerOperation = {
	type: OperationType;
	createdAt: string;
};

export type DockerOperation = BasicDockerOperation & {
	id: string;
	docker: Docker;
	backup: DockerBackup;
	resolvedAt: string;
	success: boolean;
};

export type Docker = {
	id: number;
	createDateTime: string;
	deletedAt: string | null;
	updateDateTime: string;
	missionId: number;
	imageName: string;
	state: string;
	note: string;
	mission: Mission;
	currentOperation?: BasicDockerOperation;
	totalBackupSize: number;
};

export type DockerBackup = {
	id: number;
	createDateTime: string;
	deletedAt: string;
	name: string;
	note: string;
	dockerId: number;
	size?: number;
};
