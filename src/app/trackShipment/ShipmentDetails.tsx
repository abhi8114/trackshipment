import React from 'react';
  interface TrackingData {
    trackingId: string;
    shipmentInfo: {
      docketNo: string;
      referenceNo: string;
      transporter: string;
      actualDeliveryDate: string;
      estimatedDeliveryDate: string;
      currentStatus: string;
    };
    consigneeInfo: {
      name: string;
      contactNo: string;
      address: string;
    };
    bookingInfo: {
      bookingId: string;
      orderNumber: string;
      packetCount: string;
    };
    pickupInfo: {
      address: string;
      date: string;
      mode: string;
    };
    shipmentDetails: {
      weight: string;
      pod: string;
    };
    timeline: {
      date: string;
      time: string;
      status: string;
      description: string;
    }[];
    activityLog: {
      status: string;
      dateTime: string;
      update: string;
    }[];
  }

  const ShipmentDetails = () => {
    // Sample tracking data
    const trackingData: TrackingData = {
      trackingId: '342493931820',
      shipmentInfo: {
        docketNo: '342493931820',
        referenceNo: 'UEPLINW/JJJ/1593',
        transporter: 'Amazon Shipping',
        actualDeliveryDate: 'N/A',
        estimatedDeliveryDate: 'N/A',
        currentStatus: 'Lost in transit'
      },
      consigneeInfo: {
        name: 'The Chola International',
        contactNo: '9742745596',
        address: 'kasavanhalli radu pudur, Vlllar to Chokkalin Road, Kundrathpattu'
      },
      bookingInfo: {
        bookingId: '4AAV100412024',
        orderNumber: 'INE01412A-25**4109',
        packetCount: '1'
      },
      pickupInfo: {
        address: 'kasavanhalli radu pudur, Vlllar to Chokkalin Road, Kundrathpattu',
        date: '05 Jul 2024 - 05:27 am',
        mode: 'Road'
      },
      shipmentDetails: {
        weight: '3.5',
        pod: 'N/A'
      },
      timeline: [
        {
          date: '13 Jul',
          time: '18:52 pm',
          status: 'Shipment Booked',
          description: 'Shipment booked with Amazon'
        },
        {
          date: '15 Jul',
          time: '18:52 pm',
          status: 'Pickup Pending',
          description: 'Pickup pending from warehouse'
        },
        {
          date: '17 Jul',
          time: '18:52 pm',
          status: 'In-Transit',
          description: 'Shipment undelivered due to operational issue'
        },
        {
          date: '21 Jul',
          time: '18:52 pm',
          status: 'Exception',
          description: 'Shipment delay in-transit'
        }
      ],
      activityLog: [
        {
          status: 'In-Transit',
          dateTime: '22 Jul 2024 - 12:45 pm',
          update: 'Shipment still not traceable till now and if the shipment not traceable by tomorrow marking it lost.'
        },
        {
          status: 'In-Transit',
          dateTime: '20 Jul 2024 - 11:09 am',
          update: 'Shipment undelivered due to operational issue.'
        },
        {
          status: 'In-Transit',
          dateTime: '19 Jul 2024 - 11:22 am',
          update: 'Shipment undelivered due to operational issue.'
        },
        {
          status: 'In-Transit',
          dateTime: '18 Jul 2024 - 11:33 am',
          update: 'Shipment delay in-transit.'
        },
        {
          status: 'In-Transit',
          dateTime: '16 Jul 2024 - 12:26 pm',
          update: 'Shipment delay in-transit.'
        }
      ]
    };
    type ShipmentData = {
      consigneeName: string;
      consigneeContact: string;
      consigneeAddress: string;
      bookingId: string;
      orderNumber: string;
      packetCount: number;
      pickupAddress: string;
      docketDate: string;
      mode: string;
      shipmentWeight: number;
      pod: string;
    };

  const shipmentData: ShipmentData = {
    consigneeName: "The Chola International\n264218_SC_AB_CB",
    consigneeContact: "9742745596",
    consigneeAddress: "kasavazha nadu pudur, Villar to Chokkalai Road, Kundithampattu",
    bookingId: "4641/10041/2024",
    orderNumber: "IN/6016/24-25-II-KN2P",
    packetCount: 1,
    pickupAddress: "kasavazha nadu pudur, Villar to Chokkalai Road, Kundithampattu",
    docketDate: "05 Jul, 2024 - 05:27 am",
    mode: "Road",
    shipmentWeight: 3.5,
    pod: "N/A",
  };


  return (
    <div className='p-20 pt-4 font-manrope max-w-[836px] '>
      <p className='font-manrope font-medium text-[20px]'>Tracking ID: {trackingData.trackingId}</p>
      <div className="mt-6 w-[836px] h-[129px] border border-none flex flex-col items-center justify-center  ">
        {/* header row */}
        <div className="grid grid-cols-6 bg-[#F8F9FF] text-center  rounded-t-md shadow-slate-400 shadow-xl font-semibold">
          {[
            "Docket No.",
            "Reference No.",
            "Transporter",
            "Actual Delivery Date",
            "Estimated Delivery Date",
            "Current Status",
          ].map((header, index) => (
            <div
              key={index}
              className={`p-4 flex justify-center items-center font-medium text-[14px] border-b ${index === 5 ? '' : 'border-r'
                } text-[#272727]`}
            >
              {header}
            </div>
          ))}
        </div>
        {/* data row */}
        <div className="grid grid-cols-6 bg-white border-none border-b border-l border-r text-center shadow-slate-300  shadow-md rounded-b-lg">
          {[
            "docketNo",
            "referenceNo",
            "transporter",
            "actualDeliveryDate",
            "estimatedDeliveryDate",
            "currentStatus",
          ].map((key, index) => (
            <div
              key={index}
              className={`p-4 flex justify-center items-center font-medium text-[14px] border-b ${index === 5 ? '' : 'border-r'
                } text-[#272727]`}
            >
              {trackingData.shipmentInfo[key as keyof typeof trackingData.shipmentInfo]}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-4 pl-6 pt-8 pb-6 shadow-gray-300 shadow-md bg-white rounded-lg w-[832px] h-[432px] ">
          <div className="grid grid-cols-3  gap-x-28">
            {/* Row 1 */}
            <div >
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Consignee Name</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">
                {shipmentData.consigneeName.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2 ">Consignee Contact No.</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.consigneeContact}</p>
            </div>

            <div>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Consignee Address</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">
                {shipmentData.consigneeAddress}
                <span className="text-red-500 text-sm ml-1 cursor-pointer hover:underline">
                  see more
                </span>
              </p>
            </div>

            {/* Row 2 */}
            <div className='pt-12'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Booking Id</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.bookingId}</p>
            </div>

            <div className='pt-12'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Order Number</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.orderNumber}</p>
            </div>

            <div className='pt-12'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Packet Count</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.packetCount}</p>
            </div>

            {/* Row 3 */}
            <div className='pt-6'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Pickup Address</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">
                {shipmentData.pickupAddress}
                <span className="text-red-500 text-sm ml-1 cursor-pointer hover:underline">
                  see more
                </span>
              </p>
            </div>

            <div className='pt-6'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Docket Date</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.docketDate}</p>
            </div>

            <div className='pt-6'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Mode</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.mode}</p>
            </div>

            {/* Row 4 */}
            <div className='pt-6'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">Shipment Weight</h3>
              <p className="text-[#414042] text-[14px] line-height-[20px]">{shipmentData.shipmentWeight}</p>
            </div>

            <div className='pt-6'>
              <h3 className="text-[#272727] line-height-[24px] font-semibold text-[14px] mb-2">POD</h3>
              <p className="text-gray-900">{shipmentData.pod}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4  bg-white rounded-lg shadow-md w-[836px] h-[380px]">
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Activity Status</th>
              <th className="border border-gray-300 px-4 py-2">Date & Time</th>
              <th className="border border-gray-300 px-4 py-2">Detailed Update</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.activityLog.map((log, index) => (
              <tr
                key={index}
                className="line-bottom border border-gray-300 px-8 py-2"
              >
                <td className=" text-gray-700">
                  {log.status}
                </td>
                <td className=" text-gray-700">
                  {log.dateTime}
                </td>
                <td className=" text-gray-700">
                  {log.update}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};




export default ShipmentDetails;

