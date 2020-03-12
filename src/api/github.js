import { apiRepo } from "./client";

export const getLatestCommit = () => {
    return apiRepo.get(`/commits/master`);
}
