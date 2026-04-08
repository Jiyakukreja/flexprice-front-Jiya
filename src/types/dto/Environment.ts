import { ENVIRONMENT_TYPE, Pagination, Environment } from '@/models';

export interface UpdateEnvironmentPayload {
	name?: string;
	type?: ENVIRONMENT_TYPE;
}

export interface CreateEnvironmentPayload {
	name: string;
	type: ENVIRONMENT_TYPE;
}
export interface ListEnvironmentResponse extends Pagination {
	environments: Environment[];
}

export interface CloneEnvironmentPayload {
	name: string;
	type: ENVIRONMENT_TYPE.DEVELOPMENT | ENVIRONMENT_TYPE.PRODUCTION;
}

export interface CloneEnvironmentResponse {
	workflow_id: string;
	run_id: string;
	message: string;
}
