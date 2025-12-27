import { Button, Select, Cascader, DatePicker, Form, TreeSelect } from "antd";
import { CarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Mail, MapPin, Phone } from "lucide-react";

import back from '../assets/back.png';
import mercedes from '../assets/Mercedes.png';
import jeep from '../assets/Jeep.png';
import bmw from '../assets/BMW.png';
import audi from '../assets/Audi.png';
import tayota from '../assets/Tayota.png';
import ford from '../assets/Ford.png';

const { RangePicker } = DatePicker;

const Contact = () => {
  const [form] = Form.useForm();

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <h1 className="text-[50px] font-bold text-center mb-20">Contact Us</h1>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-full lg:w-[420px] rounded-3xl bg-[#5937E0] p-8 shadow-xl">
          <h2 className="text-[28px] text-white font-semibold text-center mb-6">Book your car</h2>
          <Form form={form} layout="vertical" onFinish={(values) => console.log(values)}>
            <Form.Item name="carType" rules={[{ required: true, message: "Select car type" }]}>
              <Select
                size="large"
                placeholder="Car type"
                suffixIcon={<CarOutlined />}
                options={[
                  { value: "sedan", label: "Sedan" },
                  { value: "suv", label: "SUV" },
                  { value: "sport", label: "Sport" },
                ]}
              />
            </Form.Item>

            <Form.Item name="brand" rules={[{ required: true, message: "Select brand" }]}>
              <Cascader
                size="large"
                placeholder="Car brand"
                options={[
                  { value: "bmw", label: "BMW", children: [{ value: "x5", label: "X5" }, { value: "x6", label: "X6" }] },
                  { value: "mercedes", label: "Mercedes", children: [{ value: "e-class", label: "E-Class" }, { value: "s-class", label: "S-Class" }] },
                  { value: "audi", label: "Audi", children: [{ value: "a6", label: "A6" }, { value: "q7", label: "Q7" }] },
                  { value: "toyota", label: "Toyota", children: [{ value: "camry", label: "Camry" }, { value: "land-cruiser", label: "Land Cruiser" }] },
                  { value: "tesla", label: "Tesla", children: [{ value: "model-s", label: "Model S" }, { value: "model-x", label: "Model X" }] },
                ]}
              />
            </Form.Item>

            <Form.Item name="location" rules={[{ required: true, message: "Select location" }]}>
              <TreeSelect
                size="large"
                placeholder="Pick-up location"
                treeData={[
                  { title: "Tajikistan", value: "tj", children: [{ title: "Dushanbe", value: "dushanbe" }, { title: "Khujand", value: "khujand" }, { title: "Kulob", value: "kulob" }, { title: "Bokhtar", value: "bokhtar" }] },
                  { title: "Russia", value: "ru", children: [{ title: "Moscow", value: "moscow" }, { title: "Saint Petersburg", value: "spb" }, { title: "Kazan", value: "kazan" }, { title: "Ryazan", value: "ryazan" }] },
                  { title: "Uzbekistan", value: "uz", children: [{ title: "Tashkent", value: "tashkent" }, { title: "Samarkand", value: "samarkand" }, { title: "Bukhara", value: "bukhara" }, { title: "Andijan", value: "andijan" }] },
                  { title: "Kazakhstan", value: "kz", children: [{ title: "Almaty", value: "almaty" }, { title: "Astana", value: "astana" }, { title: "Shymkent", value: "shymkent" }] },
                ]}
                suffixIcon={<EnvironmentOutlined />}
              />
            </Form.Item>

            <Form.Item name="range" rules={[{ required: true, message: "Select rental period" }]}>
              <RangePicker size="large" className="w-full" />
            </Form.Item>

            <Button htmlType="submit" size="large" className="w-full font-semibold" style={{ background: "#FF9E0C" }} type="primary">
              Book now
            </Button>
          </Form>
        </div>
        <img className="w-full lg:w-[856px] h-auto rounded-2xl object-cover" src={back} alt="back" />
      </section>

      <section className="flex flex-wrap justify-around gap-8 mt-16">
        {[
          { icon: <MapPin />, label: "Address", value: "Oxford Ave. Cary, NC 27511" },
          { icon: <Mail />, label: "Email", value: "nwiger@yahoo.com" },
          { icon: <Phone />, label: "Phone", value: "+537 547-6401" },
          { icon: <Phone />, label: "Phone", value: "+537 547-6401" },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 items-center w-full sm:w-[300px]">
            <div className="w-16 h-16 bg-[#FF9E0C] rounded-full flex items-center justify-center text-white">{item.icon}</div>
            <div>
              <p className="text-lg font-normal">{item.label}</p>
              <h1 className="text-lg font-semibold">{item.value}</h1>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center gap-10 mt-16">
        <h1 className="text-4xl font-bold text-center">Latest blog posts & news</h1>
        <div className="w-full flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-[320px] sm:w-[416px] flex flex-col gap-4">
              <img className="w-full h-[240px] rounded-2xl object-cover" src={back} alt={`blog-${i}`} />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">
                  {i === 1 && "How to choose the right car"}
                  {i === 2 && "Which plan is right for me?"}
                  {i === 3 && "Enjoy Speed, Choice & Total Control"}
                </h2>
                <p className="text-gray-500 text-sm">News / 12 April 2024</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mt-16 mb-16">
        <div className="w-full max-w-[1296px] flex flex-wrap justify-between items-center gap-6 bg-[#FAFAFA] rounded-2xl p-8">
          <img className="w-24 h-auto object-contain" src={tayota} alt="tayota" />
          <img className="w-24 h-auto object-contain" src={ford} alt="ford" />
          <img className="w-24 h-auto object-contain" src={mercedes} alt="mercedes" />
          <img className="w-24 h-auto object-contain" src={jeep} alt="jeep" />
          <img className="w-24 h-auto object-contain hidden sm:block" src={bmw} alt="bmw" />
          <img className="w-24 h-auto object-contain hidden sm:block" src={audi} alt="audi" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
