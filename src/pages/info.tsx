import carImg from '../assets/cardImg.png'
import { AirVent, Antenna, Calendar, Check, Fuel, LandPlot, RockingChair } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Reservation, getCarById } from '../reducer/api'
import { Form, DatePicker, Button } from "antd"
import { useFormik } from 'formik'

const { RangePicker } = DatePicker

const Info = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [form] = Form.useForm()
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { car, loading } = useSelector((state: any) => state.cars)

  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      carId: id,
      startDate: "",
      endDate: "" 
    },
    onSubmit: (values) => {
      dispatch(Reservation({
        ...values,
        carId: Number(id)
      }))
    }
  })

  useEffect(() => {
    if (id) dispatch(getCarById(id))
  }, [dispatch, id])

  return (
    <div className="px-6 py-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6">
      {loading ? (
        <p className="text-center mt-20">Loading...</p>
      ) : (
        <div>
          <div className="flex-1 flex flex-col gap-4">
            <button onClick={() => navigate(-1)} className="w-32 h-10 bg-gray-200 rounded font-semibold">Back</button>
            <h1 className="text-4xl font-bold">{car?.title}</h1>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-[#5937E0]">${car?.pricePerHour}</span>
              <span className="text-sm text-gray-500">/ day</span>
            </div>
            <img className="w-full max-w-[636px] h-[303px] object-cover rounded" src={carImg} alt="car" />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 bg-gray-100 rounded flex flex-col items-center gap-2">
                <Antenna size={24} />
                <p className="font-medium">Gear Box</p>
                <p className="text-gray-500">Automat</p>
              </div>
              <div className="p-6 bg-gray-100 rounded flex flex-col items-center gap-2">
                <Fuel size={24} />
                <p className="font-medium">Fuel</p>
                <p className="text-gray-500">Petrol</p>
              </div>
              <div className="p-6 bg-gray-100 rounded flex flex-col items-center gap-2">
                <Calendar size={24} />
                <p className="font-medium">Year</p>
                <p className="text-gray-500">{car?.year}</p>
              </div>
              <div className="p-6 bg-gray-100 rounded flex flex-col items-center gap-2">
                <AirVent size={24} />
                <p className="font-medium">Air Conditioner</p>
                <p className="text-gray-500">Yes</p>
              </div>
              <div className="p-6 bg-gray-100 rounded flex flex-col items-center gap-2">
                <RockingChair size={24} />
                <p className="font-medium">Seats</p>
                <p className="text-gray-500">{car?.seats}</p>
              </div>
              <div className="p-6 bg-gray-100 rounded flex flex-col items-center gap-2">
                <LandPlot size={24} />
                <p className="font-medium">Distance</p>
                <p className="text-gray-500">500 km</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <Button
                className="w-72 h-12 bg-[#5937E0] text-white rounded font-semibold mt-4 cursor-pointer"
                onClick={() => setFormVisible(!formVisible)}
              >
                Rent a car
              </Button>

              {formVisible && (
                <Form onFinish={handleSubmit} form={form} layout="vertical" className="w-full mt-4">
                  <Form.Item
                    name="range"
                    rules={[{ required: true, message: "Select rental period" }]}
                  >
                    <RangePicker
                      size="large"
                      className="w-full"
                      onChange={(dates, dateStrings) => {
                        setFieldValue("startDate", dateStrings[0])
                        setFieldValue("endDate", dateStrings[1])
                        setFieldValue("carId", id)
                      }}
                    />
                  </Form.Item>

                  <Button type="primary" htmlType="submit" className="w-full">
                    Submit
                  </Button>
                </Form>
              )}
            </div>

            <h2 className="text-2xl font-semibold mt-6">Car Equipment</h2>
            <div className="flex flex-wrap gap-7">
              {["ABS", "Air Bags", "Cruise Control", "Turbo"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#5937E0] text-white rounded-full"><Check size={16} /></div>
                  <h1 className="text-gray-500">{item}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Info
