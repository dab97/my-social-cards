import { Card, CardContent } from "@/components/ui/card";

const SocialCards = () => {
  const socialData = [
    { name: "Telegram", value: "$12,345.67", change: "23.4%", positive: true },
    { name: "Instagram", value: "$10,065.23", change: "87.2%", positive: true },
    { name: "TikTok", value: "$8,123.45", change: "12.3%", positive: false },
    { name: "YouTube", value: "$5,567.89", change: "5.6%", positive: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 flex flex-col p-4 space-y-4">
      <h1 className="text-2xl font-semibold text-white mb-4 text-center">
        Social Media Sales
      </h1>

      {socialData.map((social, index) => (
        <Card
          key={index}
          className="bg-gray-800/60 rounded-lg shadow-lg border border-gray-700"
        >
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-white">{social.name}</h2>
              <p className="text-2xl font-bold text-white">{social.value}</p>
            </div>
            <div
              className={`text-sm font-medium ${
                social.positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {social.positive ? "↑" : "↓"} {social.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialCards;