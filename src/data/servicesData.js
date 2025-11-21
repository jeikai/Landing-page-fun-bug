import {
    Menu, X, ChevronRight, Phone, Mail, MapPin, Award,
    Code, Smartphone, Brain, Gamepad2, ExternalLink,
    ArrowRight, Play, Users, Target, Zap, CheckCircle,
    Star, Calendar, Globe, Briefcase
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        icon: Code,
        title: "Web Development",
        subtitle: "Website & Web Application",
        description: "Professional website development with modern technology, optimized performance and user experience",
        features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Security"],
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 2,
        icon: Smartphone,
        title: "Mobile Applications",
        subtitle: "iOS & Android App",
        description: "Cross-platform mobile applications with intuitive interface and high performance",
        features: ["Cross Platform", "Native Performance", "Push Notification", "Offline Support"],
        color: "from-green-500 to-green-600"
    },
    {
        id: 3,
        icon: Brain,
        title: "AI Integration",
        subtitle: "Artificial Intelligence",
        description: "Integrate artificial intelligence into products to create intelligent experiences",
        features: ["Machine Learning", "Natural Language", "Computer Vision", "Automation"],
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 4,
        icon: Gamepad2,
        title: "Game Development",
        subtitle: "Educational & Entertainment",
        description: "Educational and entertainment game development with beautiful graphics and engaging gameplay",
        features: ["2D/3D Graphics", "Multi-platform", "Engaging Gameplay", "Educational Content"],
        color: "from-red-500 to-red-600"
    }
];

export default servicesData