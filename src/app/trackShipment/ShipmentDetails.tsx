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

  return (
    <div className='p-20 pt-4 font-manrope '>
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
              className="p-4  font-semibold text-[14px] border-b border-r"
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
              className="pl-3 pr-3 pt-6  pb-7 text-sm text-gray-800 border-r"
            >
              {trackingData.shipmentInfo[key as keyof typeof trackingData.shipmentInfo]}
            </div>
          ))}
        </div>
      </div>

    </div>


  );
};


export default ShipmentDetails;