import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Select,
  TreeSelect,
} from "antd";
import {
  CarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { RangePicker } = DatePicker;

const Section1 = () => {
  const [form] = Form.useForm();

  return (
    <div className="max-w-[1440px] mx-auto px-[72px]">
      <div className="rounded-[40px] bg-[#5937E0] px-[72px] py-[80px]">
        <div className="flex items-center gap-[44px]">
          
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-[60px] font-bold leading-[1.1] text-white">
              Experience the road <br /> like never before
            </h1>
            <p className="text-white/90 max-w-[520px]">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida.
            </p>

            <Button
              size="large"
              className="w-[180px] font-semibold"
              style={{ background: "#FF9E0C" }}
              type="primary"
            >
              View all cars
            </Button>
          </div>

          <div className="w-[420px] rounded-[24px] bg-white p-[32px] shadow-xl">
            <h2 className="text-[28px] font-semibold text-center mb-6">
              Book your car
            </h2>

            <Form
              form={form}
              layout="vertical"
              onFinish={(values) => console.log(values)}
            >
              <Form.Item
                name="carType"
                rules={[{ required: true, message: "Select car type" }]}
              >
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

              <Form.Item
                name="brand"
                rules={[{ required: true, message: "Select brand" }]}
              >
                <Cascader
                  size="large"
                  placeholder="Car brand"
                  options={[
                    {
                      value: "bmw",
                      label: "BMW",
                      children: [
                        { value: "x5", label: "X5" },
                        { value: "x6", label: "X6" },
                      ],
                    },
                    {
                      value: "mercedes",
                      label: "Mercedes",
                      children: [
                        { value: "e-class", label: "E-Class" },
                        { value: "s-class", label: "S-Class" },
                      ],
                    },
                    {
                      value: "audi",
                      label: "Audi",
                      children: [
                        { value: "a6", label: "A6" },
                        { value: "q7", label: "Q7" },
                      ],
                    },
                    {
                      value: "toyota",
                      label: "Toyota",
                      children: [
                        { value: "camry", label: "Camry" },
                        { value: "land-cruiser", label: "Land Cruiser" },
                      ],
                    },
                    {
                      value: "tesla",
                      label: "Tesla",
                      children: [
                        { value: "model-s", label: "Model S" },
                        { value: "model-x", label: "Model X" },
                      ],
                    },
                  ]}                  
                />
              </Form.Item>

              <Form.Item
                name="location"
                rules={[{ required: true, message: "Select location" }]}
              >
                <TreeSelect
                  size="large"
                  placeholder="Pick-up location"
                  treeData={[
                    {
                      title: "Tajikistan",
                      value: "tj",
                      children: [
                        { title: "Dushanbe", value: "dushanbe" },
                        { title: "Khujand", value: "khujand" },
                        { title: "Kulob", value: "kulob" },
                        { title: "Bokhtar", value: "bokhtar" },
                      ],
                    },
                    {
                      title: "Russia",
                      value: "ru",
                      children: [
                        { title: "Moscow", value: "moscow" },
                        { title: "Saint Petersburg", value: "spb" },
                        { title: "Kazan", value: "kazan" },
                        { title: "Ryazan", value: "ryazan" },
                      ],
                    },
                    {
                      title: "Uzbekistan",
                      value: "uz",
                      children: [
                        { title: "Tashkent", value: "tashkent" },
                        { title: "Samarkand", value: "samarkand" },
                        { title: "Bukhara", value: "bukhara" },
                        { title: "Andijan", value: "andijan" },
                      ],
                    },
                    {
                      title: "Kazakhstan",
                      value: "kz",
                      children: [
                        { title: "Almaty", value: "almaty" },
                        { title: "Astana", value: "astana" },
                        { title: "Shymkent", value: "shymkent" },
                      ],
                    },
                  ]}                  
                  suffixIcon={<EnvironmentOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="range"
                rules={[{ required: true, message: "Select rental period" }]}
              >
                <RangePicker
                  size="large"
                  className="w-full"
                />
              </Form.Item>

              <Button
                htmlType="submit"
                size="large"
                className="w-full font-semibold"
                style={{ background: "#FF9E0C" }}
                type="primary"
              >
                Book now
              </Button>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;
