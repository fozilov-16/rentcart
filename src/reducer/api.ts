
import { createAsyncThunk } from "@reduxjs/toolkit"

import { saveToken } from './../utils/token';
import { axiosRequest } from './../utils/token';

const API = import.meta.env.VITE_PRODUCT_API
import axios from "axios"


export const register = createAsyncThunk("cars/register",
    async (user: { email: string; password: string, confirmPassword: string }) => {
    try {
      const { data } = await axios.post(`${API}/api/auth/register`, user);
      saveToken(data)
    } catch (error) {
      console.error(error)
    }
  }
);

export const login = createAsyncThunk("cars/login",
  async ( user: { email: string; password: string }) => {
    try {
      const { data } = await axios.post(`${API}/api/auth/login`, user);
      console.log(data)
      if (data) {
        saveToken(data)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  }
);


export const getCars = createAsyncThunk("cars/getCars", async () => {
    try {
      const { data } = await axiosRequest.get("api/cars");
      return data;
    } catch (error: any) {
      console.error(error)
    }
  }
);

export const getCarById = createAsyncThunk("cars/ingetCarByIdfo", async (id) => {
  try {
    const { data } = await axiosRequest.get(`api/cars/${id}`)
    return data;
  } catch (error) {
    console.error(error)
  }
})


export const Reservation = createAsyncThunk("cars/Reservation",
  async (obj) => {
    try {
      const {data} = await axiosRequest.post(`api/reservations`, obj);
      return data
    } catch (error) {
      console.error(error)
    }
  }
);