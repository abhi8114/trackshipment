import React from 'react';

// Define the type for a timeline entry
type TimelineEntry = {
  date: string;
  time: string;
  status: string;
  description: string;
};

// Timeline data with proper typing
const timeline: TimelineEntry[] = [
  { date: '13 Jul', time: '18:52 pm', status: 'Shipment Booked', description: 'Shipment booked with Amazon' },
  { date: '15 Jul', time: '18:52 pm', status: 'Pickup Pending', description: 'Pickup pending from warehouse' },
  { date: '17 Jul', time: '18:52 pm', status: 'In-Transit', description: 'Shipment undelivered due to operational issue' },
  { date: '21 Jul', time: '18:52 pm', status: 'Exception', description: 'Shipment delay in-transit' },
];

const TrackingTimeline: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[350px] ">
      <h2 className="text-lg font-semibold text-[#272727] mb-6">Tracking Status</h2>
      <div className="relative">
        {timeline.map((entry, index) => (
          <div key={index} className="flex items-start relative">
            {/* Timeline Indicator */}
            <div className="relative flex flex-col items-center">
              {/* Circle */}
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  entry.status !== 'Exception' ? 'bg-red-500' : 'bg-gray-400'
                }`}
              >
                {entry.status !== 'Exception' ? (
                  <span className="text-white font-bold">&#10003;</span>
                ) : (
                  <span className="text-white font-bold">!</span>
                )}
              </div>

              {/* Line (only if not last item) */}
              {index !== timeline.length - 1 && (
                <div
                  className={`absolute top-6 w-[2px] ${
                    entry.status !== 'Exception' ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                  style={{ height: 'calc(100% + 24px)' }} // Extends the line to connect circles
                />
              )}
            </div>

            {/* Timeline Content */}
            <div className="ml-4 mb-8">
              <p className="text-sm text-[#272727] font-semibold">{entry.date}</p>
              <p className="text-sm text-[#414042]">{entry.time}</p>
              <p className="text-sm text-[#272727] font-medium mt-1">{entry.status}</p>
              <p className="text-sm text-[#414042]">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingTimeline;
