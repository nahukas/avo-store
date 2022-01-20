export interface ApiError {
  errorCode: string;
  errorMessage: string;
}

export interface ApiWarning {
  errorCode: string;
  errorMessage: string;
}

export interface ApiResponse {
  errors: ApiError[];
  warnings: ApiWarning[];
}
