const HomePage = require('../models/HomePage');
const { cloudinary } = require('../utils/cloudinary');

// @desc    Get home page data
// @route   GET /api/home-page
// @access  Public
const getHomePage = async (req, res) => {
    try {
        let homePage = await HomePage.findOne({ isActive: true })
            .populate('featuredProducts')
            .populate('featuredProjects');

        if (!homePage) {
            // Create default home page if none exists
            homePage = await HomePage.create({
                heroSection: {
                    title: 'Welcome to Tilak Stone Art',
                    subtitle: 'Crafting Divine Spaces',
                    description: 'Premium marble temples, murtis, and home decor'
                },
                stats: {
                    projectsCompleted: 500,
                    happyClients: 1000,
                    yearsExperience: 25,
                    teamMembers: 50
                }
            });
        }

        res.json({ success: true, data: homePage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update home page
// @route   POST /api/home-page
// @access  Private/Admin
const updateHomePage = async (req, res) => {
    try {
        let homePage = await HomePage.findOne();

        if (!homePage) {
            homePage = new HomePage(req.body);
        } else {
            Object.assign(homePage, req.body);
        }

        // Handle hero images upload
        if (req.body.heroSection?.images) {
            const uploadedImages = [];
            for (const img of req.body.heroSection.images) {
                if (typeof img === 'string' && img.startsWith('data:image')) {
                    const result = await cloudinary.uploader.upload(img, {
                        folder: 'home-page/hero'
                    });
                    uploadedImages.push({
                        url: result.secure_url,
                        publicId: result.public_id,
                        alt: 'Hero Image'
                    });
                } else if (img.url) {
                    uploadedImages.push(img);
                }
            }
            homePage.heroSection.images = uploadedImages;
        }

        // Handle about section image
        if (req.body.aboutSection?.image && typeof req.body.aboutSection.image === 'string' && req.body.aboutSection.image.startsWith('data:image')) {
            const result = await cloudinary.uploader.upload(req.body.aboutSection.image, {
                folder: 'home-page/about'
            });
            homePage.aboutSection.image = {
                url: result.secure_url,
                publicId: result.public_id,
                alt: 'About Us'
            };
        }

        await homePage.save();
        res.json({ success: true, data: homePage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getHomePage,
    updateHomePage
};
