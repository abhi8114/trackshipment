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
<div className="py-10 md:pb-16 pb-14 md:py-8 px-4 md:px-20 font-manrope text-primary max-w-[1400px] mx-auto">
  <p className="font-medium text-lg md:text-xl">Tracking ID: {trackingData.trackingId}</p>

  {/* First Section */}
  <div className="mt-6 shadow-md rounded-lg flex flex-col items-center justify-center w-full md:w-[836px]">
    {/* Header Row */}
    <div className="grid w-full grid-cols-1 md:grid-cols-6 bg-[#F8F9FF] text-center font-semibold">
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
          className={`p-4 text-sm md:text-base border-b border-[#DCDCDC] ${index === 5 ? '' : 'border-r'} text-[#272727]`}
        >
          {header}
        </div>
      ))}
    </div>

    {/* Data Row */}
    <div className="grid grid-cols-1 md:grid-cols-6 bg-white text-center shadow-sm rounded-b-lg w-full">
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
          className={`p-4 text-[13px] md:text-sm text-[#272727] ${index === 5 ? '' : 'border-r border-[#DCDCDC]'}`}
        >
          {trackingData.shipmentInfo[key as keyof typeof trackingData.shipmentInfo]}
        </div>
      ))}
    </div>
  </div>

  {/* Second Section */}
  <div className="mt-4 p-7 shadow-md rounded-lg bg-white w-full md:w-[836px]">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-28">
    {/* Row 1 */}
    <div>
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Consignee Name</h3>
      <p className="text-[#414042] text-[14px]">
        {shipmentData.consigneeName.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
    <div>
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Consignee Contact No.</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.consigneeContact}</p>
    </div>
    <div>
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Consignee Address</h3>
      <p className="text-[#414042] text-[14px] flex flex-col">
        {shipmentData.consigneeAddress}
        <span className="text-red-500 text-sm cursor-pointer hover:underline">
          see more
        </span>
      </p>
    </div>

    {/* Row 2 */}
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Booking Id</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.bookingId}</p>
    </div>
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Order Number</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.orderNumber}</p>
    </div>
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Packet Count</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.packetCount}</p>
    </div>

    {/* Row 3 */}
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Pickup Address</h3>
      <p className="text-[#414042] text-[14px] flex flex-col">
        {shipmentData.pickupAddress}
        <span className="text-red-500 text-sm cursor-pointer hover:underline">
          see more
        </span>
      </p>
    </div>
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Docket Date</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.docketDate}</p>
    </div>
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Mode</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.mode}</p>
    </div>

    {/* Row 4 */}
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">Shipment Weight</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.shipmentWeight}</p>
    </div>
    <div className="md:pt-6 pt-2">
      <h3 className="text-[#272727] font-semibold text-[14px] mb-2">POD</h3>
      <p className="text-[#414042] text-[14px]">{shipmentData.pod}</p>
    </div>
  </div>
  </div>

  {/* Third Section */}
  <div className="mt-4 shadow-md rounded-lg bg-white w-full overflow-x-auto md:w-[836px]">
    <table className="w-full text-sm md:text-base">
      <thead className="bg-[#F8F9FF]">
        <tr>
          <th className="px-4 py-2 md:w-[25%] text-left">Activity Status</th>
          <th className="px-4 py-2 md:w-[30%] text-left">Date & Time</th>
          <th className="px-4 py-2 md:w-[55%] text-left">Detailed Update</th>
        </tr>
      </thead>
      <tbody>
        {trackingData.activityLog.map((log, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2">{log.status}</td>
            <td className="px-4 py-2">{log.dateTime}</td>
            <td className="px-4 py-2">{log.update}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};




export default ShipmentDetails;

