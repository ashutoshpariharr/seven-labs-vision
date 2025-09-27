import { useState } from "react";
import RaghavImage from "../assets/raghav.png";
import SashankImage from "../assets/shashank.png";
import KapilImage from "../assets/kapil.png";
import { Link } from "react-router-dom";



interface TeamMember {
    id: string;
    name: string;
    title: string;
    credentials: string;
    description: string;
    image: string;
    borderColor: string;
}

const TeamLeads: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            id: "raghav",
            name: "CA Raghav Bansal",
            title: "Ex-KPMG & Grant Thornton",
            credentials: "Chartered Accountant",
            description: "Decade long experience in audit and transaction advisory. Industries catered includes Aviation, Food & Beverage, Consumer markets, Infrastructure and Real Estate, Industrial markets etc. Has expertise in Corporate structuring, IFC, Assurance, Financial Modelling",
            image: RaghavImage,
            borderColor: "border-blue-200"
        },
        {
            id: "sashank",
            name: "CA Sashank Tiwari",
            title: "FCA, DISA",
            credentials: "Fellow Chartered Accountant",
            description: "He is a distinguished Chartered Accountant, boasts over a decade of expertise in government and bank audits. With a career kickstarted in 2008 he has specialised in direct and Indirect taxation with core focus on litigation on GST matters.",
            image: SashankImage,
            borderColor: "border-blue-200"
        },
        {
            id: "kapil",
            name: "Kapil Bharti",
            title: "Indian Institute of Science (MS)",
            credentials: "Master of Science",
            description: "7+ years of management experience in Product Development, GTM Strategy and Operations Management for Fortune#100 clients. Cross cultural experience having worked at USA, Europe & India",
            image: KapilImage,
            borderColor: "border-blue-200"
        }
    ];

    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        OUR TEAM LEADS
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet the experienced professionals who drive our success and deliver exceptional results for our clients.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredMember(member.id)}
                            onMouseLeave={() => setHoveredMember(null)}
                        >
                            {/* Card Container */}
                            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">

                                {/* Profile Image */}
                                <div className="relative mb-6">
                                    <div className={`relative inline-block rounded-lg overflow-hidden border-2 ${member.borderColor}`}>
                                        <img
                                            src={member.image}
                                            // src={RaghavImage}
                                            alt={member.name}
                                            className="w-48 h-48 object-cover mx-auto block"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>

                                    <div className="mb-4">
                                        <p className="text-purple-600 font-semibold text-lg">
                                            {member.title}
                                        </p>
                                        <p className="text-gray-500 text-sm font-medium">
                                            {member.credentials}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="text-gray-600 leading-relaxed">
                                        <p className="text-sm lg:text-base">
                                            {member.description}
                                        </p>
                                    </div>

                                    {/* Decorative Element */}
                                    <div className="mt-6">
                                        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-yellow-400 mx-auto rounded-full"></div>
                                    </div>
                                </div>

                                {/* Hover Effect Glow */}
                                <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl p-8 border border-purple-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Work with Our Expert Team?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Our team combines decades of experience with innovative approaches to deliver exceptional results for your business.
                        </p>
                        <Link to="/contact">
                            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamLeads;