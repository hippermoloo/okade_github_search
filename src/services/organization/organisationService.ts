import { AxiosResponse } from "axios";
import http from "../httpService";
import { AllOrganizationDto } from "./dto/allOrganizationDto";
import { OrganizationDto } from "./dto/organizationDto";

class OrganizationService {

    public async getAllOrganization(): Promise<AllOrganizationDto[]> {
        let result: AxiosResponse = await http.get('organizations');
        return result.data;
    }

    public async getOrganization(organization:string): Promise<OrganizationDto> {
        let result: AxiosResponse = await http.get(`orgs/${organization}`);
        return result.data;
    }
}

export default new OrganizationService();