import { HttpBaseService } from '../shared/services/http-client/http-base-service';
import { apiConstants } from '../config/apiConstants';
const header = HttpBaseService.getBaseHeaders()

const authenticateController = (body) => {
    const url = apiConstants.controllerLogin;
    //const url = 'https://localhost:44305/api/User'
    const headers = header
    return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers,body);
};
const addNewForm = (body) => {
    const url = apiConstants.addForm;
    //const url = 'https://localhost:44305/api/User'
    const headers = header
    return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers,body);
};
const getControllerFormWithId = (Id) => {
    const url = apiConstants.getFormWithId+Id;
    //const url = 'https://localhost:44305/api/User'
    const headers = header
    return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers);
};
const getDataSubjectSendInvitaion = (body) => {
    const url = apiConstants.dataSubjectSendInvitaion;
    //const url = 'https://localhost:44305/api/User'
    const headers = header
    return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers,body);
};

// const getPlans = (body) => {
//         const url = apiConstants.plans;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null,body);
//     };
//     const addPlan = (body) => {
//         const url = apiConstants.addPlans;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
//     };
//     const deletePlan = (Id) => {
//         const url = apiConstants.deletePlan+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.DELETE, null, headers);
//     };
//     const updatePlan = (body) => {
//         const url = apiConstants.updatePlan;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.PUT, null, headers,body);
//     };
//     const getPlanById = (Id) => {
//         const url = apiConstants.getPlan+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers);
//     };
    
//     const getForms = (body) => {
//         const url = apiConstants.forms;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null,body);
//     };
//     const getFormById = (Id) => {
//         const url = apiConstants.getForm+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers);
//     };
//     const deleteForm = (Id) => {
//         const url = apiConstants.deleteForm+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.DELETE, null, headers);
//     };
//     const getUsers = (body) => {
//         const url = apiConstants.users;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null,body);
//     };
//     const getUserById = (Id) => {
//         const url = apiConstants.getUser+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers);
//     };
//     const deleteUser = (Id) => {
//         const url = apiConstants.deleteUser+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.DELETE, null, headers);
//     };
//     const getControllers = (body) => {
//         const url = apiConstants.getControllers;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null,body);
//     };
//     const actAsControllers = (Id) => {
//         const url = apiConstants.actAsControllers+Id;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers);
//     };
//     const logout = (body) => {
//         const url = apiConstants.logout;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.DELETE, null, headers,body);
//     };
//     const sendOtpForForgotPassoword = (body) => {
//         const url = apiConstants.sendOtpForForgotPassword;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers,body);
//     };
//     const verifyEmailOtp = (body) => {
//         const url = apiConstants.verifyEmailOtp;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers,body);
//     };
//     const resetPassword = (body) => {
//         const url = apiConstants.resetPassword;
//         //const url = 'https://localhost:44305/api/User'
//         const headers = header
//         return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers,body);
//     };
export default {
    authenticateController,
    addNewForm,
    getControllerFormWithId,
    getDataSubjectSendInvitaion
    // getPlans,
    // addPlan,
    // deletePlan,
    // getPlanById,
    // updatePlan,
    // getForms,
    // getFormById,
    // deleteForm,
    // getUsers,
    // getUserById,
    // deleteUser,
    // getControllers,
    // actAsControllers,
    // logout,
    // sendOtpForForgotPassoword,
    // verifyEmailOtp,
    // resetPassword,
    
    
   
   
    
};