export interface IAuthContextType {
	isAuthenticated: boolean;
	loginUser: (accountNumber: string, password: string) => void;
	logout: () => void;
	error: string | null;
}
