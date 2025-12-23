const mongoose = require('mongoose');

const HomePageSchema = new mongoose.Schema({
    heroSection: {
        images: [{
            url: String,
            publicId: String,
            alt: String
        }],
        title: String,
        subtitle: String,
        description: String,
        ctaText: String,
        ctaLink: String
    },
    featuredProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'featuredProductModel'
    }],
    featuredProductModel: {
        type: String,
        enum: ['StoneProduct', 'MurtiProduct', 'HomeDecorProduct']
    },
    featuredProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'featuredProjectModel'
    }],
    featuredProjectModel: {
        type: String,
        enum: ['CommunalProjects', 'ResidentialProjects', 'InternationalProjects']
    },
    stats: {
        projectsCompleted: { type: Number, default: 0 },
        happyClients: { type: Number, default: 0 },
        yearsExperience: { type: Number, default: 0 },
        teamMembers: { type: Number, default: 0 }
    },
    aboutSection: {
        title: String,
        description: String,
        image: {
            url: String,
            publicId: String,
            alt: String
        }
    },
    whyChooseUs: [{
        title: String,
        description: String,
        icon: String
    }],
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('HomePage', HomePageSchema);
