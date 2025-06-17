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
        title: "Phát triển Web",
        subtitle: "Website & Web Application",
        description: "Phát triển website chuyên nghiệp với công nghệ hiện đại, tối ưu hiệu suất và trải nghiệm người dùng",
        features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Security"],
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 2,
        icon: Smartphone,
        title: "Ứng dụng Mobile",
        subtitle: "iOS & Android App",
        description: "Ứng dụng di động đa nền tảng với giao diện trực quan và hiệu suất cao",
        features: ["Cross Platform", "Native Performance", "Push Notification", "Offline Support"],
        color: "from-green-500 to-green-600"
    },
    {
        id: 3,
        icon: Brain,
        title: "Tích hợp AI",
        subtitle: "Artificial Intelligence",
        description: "Tích hợp trí tuệ nhân tạo vào sản phẩm để tạo ra những trải nghiệm thông minh",
        features: ["Machine Learning", "Natural Language", "Computer Vision", "Automation"],
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 4,
        icon: Gamepad2,
        title: "Phát triển Game",
        subtitle: "Educational & Entertainment",
        description: "Phát triển game giáo dục và giải trí với đồ họa đẹp mắt và gameplay hấp dẫn",
        features: ["2D/3D Graphics", "Multi-platform", "Engaging Gameplay", "Educational Content"],
        color: "from-red-500 to-red-600"
    }
];

export default servicesData