import React, { useEffect, useState } from 'react'

const ProjectDrawer = ({ isOpen, onClose, project }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300)
            document.body.style.overflow = 'unset'
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isVisible && !isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[290] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 right-0 w-full md:w-1/2 bg-white shadow-2xl z-[300] transform transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 bg-white/80"
                >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 md:p-8 space-y-8">
                    {/* Header Image */}
                    {project && (
                        <div className="w-full h-48 md:h-72 rounded-xl overflow-hidden shadow-lg relative bg-gray-50 flex items-center justify-center">
                            <img
                                src={project.image}
                                alt={project.title || "Project Image"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content Section */}
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-serif text-[#8B7355] italic">
                            {project?.title || "Project Details"}
                        </h3>
                        <div className="w-16 h-1 bg-[#8B7355] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                        <p>
                            {project?.description || "Experience the divine craftsmanship and intricate details of this magnificent project. Each stone is carefully selected and carved to perfection, creating a timeless masterpiece that radiates spiritual energy and architectural beauty."}
                        </p>
                        <p>
                            Our team of expert artisans has poured their heart and soul into creating this sacred space, ensuring that every curve and corner reflects the devotion and tradition it represents.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDrawer
