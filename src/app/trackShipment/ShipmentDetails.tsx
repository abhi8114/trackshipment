import React from 'react';


const ShipmentDetails = () => {
  // Sample tracking data
  const trackingData = {
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
    <div className='mt-6 w-3/4 border rounded-md'>
        {/* header row */}

        <div className='grid grid-cols-6 bg-[#F8F9FF] border-t border-l border-r text-center font-manrope font-semibold '>
            <div className='p-4 text-sm font-medium text-[14px]   broder-b border-r'>Docket No.</div>
            <div className='p-4 text-sm font-medium text-[14px]   border-b border-r '> Reference No.</div>
            <div className='p-4 text-sm font-medium text-[14px]   border-b border-r'> Transporter</div>
            <div className='p-4 text-sm font-medium text-[14px]   border-b border-r'> Actual Delivery Date</div>
            <div className='p-4 text-sm font-medium text-[14px]   border-b border-r'> Estimated Delivery Date</div>
            <div className='p-4 text-sm font-medium text-[14px]  border-b border-r'> Current Status</div>
        </div>
        {/* data row */}
        <div className='grid grid-cols-6 bg-white border-b border-l border-r text-center'>
            <div className='p-4 text-sm text-gray-800 border-r'>
                {trackingData.shipmentInfo.docketNo}
            </div>
            <div className='p-4 text-sm text-gray-800 border-r'>
                {trackingData.shipmentInfo.referenceNo}
            </div>
            <div className='p-4 text-sm text-gray-800 border-r'>
                {trackingData.shipmentInfo.transporter}
            </div>
            <div className='p-4 text-sm text-gray-800 border-r'>
                {trackingData.shipmentInfo.actualDeliveryDate}
            </div>
            <div className='p-4 text-sm text-gray-800 border-r'>
                {trackingData.shipmentInfo.estimatedDeliveryDate}
            </div>
            <div className='p-4 text-sm text-gray-800 border-r'>
                {trackingData.shipmentInfo.currentStatus}
            </div>
        </div>
    </div>
    
  );
};

export default ShipmentDetails;