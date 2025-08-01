import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, useParams, useLocation, useNavigate, NavLink, Outlet, useOutletContext, Routes, Route, Navigate } from "react-router-dom";
import { CodeBracketIcon, PaintBrushIcon, ChatBubbleOvalLeftEllipsisIcon, SwatchIcon, ArrowTopRightOnSquareIcon, SparklesIcon, UsersIcon, UserGroupIcon, Bars3Icon, BoltIcon as BoltIcon$1 } from "@heroicons/react/24/outline";
import { CheckCircleIcon, ArrowLeftIcon as ArrowLeftIcon$1, ArrowDownIcon as ArrowDownIcon$1, ArrowRightIcon as ArrowRightIcon$1, XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
const Logo = ({ showText = false, className = "", lang, onClick }) => {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/${lang}`,
      onClick,
      className: `flex items-center group transition-all duration-500 ease-in-out ${className}`,
      "aria-label": "Oriello Home",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://i.ibb.co/DPJKpb2N/oriellologo.png",
            alt: "Oriello Logo",
            className: "h-10 w-10 flex-shrink-0 transition-opacity duration-300 group-hover:opacity-80"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
          grid transition-all duration-500 ease-in-out
          ${showText ? "grid-cols-[1fr]" : "grid-cols-[0fr]"}
        `,
            children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `
                block whitespace-nowrap font-black text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-300
                transition-opacity duration-300 pl-2 pr-4
                ${showText ? "opacity-100" : "opacity-0"}
              `,
                "aria-hidden": !showText,
                children: "Oriello"
              }
            ) })
          }
        )
      ]
    }
  );
};
const LangSwitcher = ({ currentLang, onLangChange }) => {
  const languages = ["en", "cs"];
  return /* @__PURE__ */ jsx("div", { className: "bg-black/30 backdrop-blur-sm p-1 rounded-full border border-white/20", children: languages.map((lang) => /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => onLangChange(lang),
      className: `
            px-3 py-1 text-sm font-semibold uppercase rounded-full transition-colors duration-300
            ${currentLang === lang ? "bg-white text-black" : "text-white hover:bg-white/10"}
          `,
      "aria-pressed": currentLang === lang,
      children: lang
    },
    lang
  )) });
};
const DesignIcon = PaintBrushIcon;
const CodeIcon = CodeBracketIcon;
const UxIcon = SwatchIcon;
const SendIcon = PaperAirplaneIcon;
const ArrowDownIcon = ArrowDownIcon$1;
const CloseIcon = XMarkIcon;
const MenuIcon = Bars3Icon;
const ExternalLinkIcon = ArrowTopRightOnSquareIcon;
const TargetIcon = UserGroupIcon;
const PartnershipIcon = UsersIcon;
const QualityIcon = SparklesIcon;
const CheckmarkIcon = CheckCircleIcon;
const BoltIcon = BoltIcon$1;
const DiscoveryCallIcon = ChatBubbleOvalLeftEllipsisIcon;
const ArrowLeftIcon = ArrowLeftIcon$1;
const ArrowRightIcon = ArrowRightIcon$1;
const InstagramIcon = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A48.041 48.041 0 0112 2.163zm0 1.625c-3.142 0-3.48.01-4.69.066-2.69.123-3.832 1.264-3.954 3.955-.057 1.214-.066 1.548-.066 4.688s.01 3.474.066 4.688c.122 2.69 1.264 3.832 3.955 3.955 1.21.056 1.547.066 4.69.066 3.142 0 3.48-.01 4.69-.066 2.69-.123 3.832-1.264 3.955-3.955.056-1.214.066-1.548.066-4.688s-.01-3.474-.066-4.688c-.123-2.69-1.264-3.832-3.955-3.955A46.54 46.54 0 0012 3.788z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 7.088c-2.71 0-4.912 2.202-4.912 4.912s2.202 4.912 4.912 4.912 4.912-2.202 4.912-4.912-2.202-4.912-4.912-4.912zm0 8.25c-1.84 0-3.338-1.498-3.338-3.338s1.498-3.338 3.338-3.338 3.338 1.498 3.338 3.338-1.498 3.338-3.338 3.338z" }),
      /* @__PURE__ */ jsx("path", { d: "M16.965 6.57c.606 0 1.095.49 1.095 1.095s-.49 1.095-1.095 1.095-1.095-.49-1.095-1.095.489-1.095 1.095-1.095z" })
    ]
  }
);
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    if (mediaQueryList.matches !== matches) {
      setMatches(mediaQueryList.matches);
    }
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [matches, query]);
  return matches;
};
const Header = ({ navigationContent, langProps, setSubmissionState }) => {
  const { lang } = useParams();
  const location = useLocation();
  useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isHomePage = location.pathname === `/${lang}` || location.pathname === `/${lang}/` || location.pathname.endsWith("/contact");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      if (isHomePage) {
        setShowLogoText(scrollY > window.innerHeight * 0.8);
      } else {
        setShowLogoText(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);
  const handleLogoClick = (e) => {
    setSubmissionState("form");
    setIsMobileMenuOpen(false);
  };
  const navLinks = [
    { label: navigationContent.projects, to: `/${lang}/projects` },
    { label: navigationContent.testimonials, to: `/${lang}#testimonials` },
    { label: navigationContent.contact, to: `/${lang}/contact` }
  ];
  const NavItems = ({ isMobile: isMobile2 = false }) => /* @__PURE__ */ jsx(Fragment, { children: navLinks.map((link, index) => /* @__PURE__ */ jsx(
    NavLink,
    {
      to: link.to,
      onClick: () => {
        setIsMobileMenuOpen(false);
        if (!link.to.endsWith("/contact")) {
          setSubmissionState("form");
        }
      },
      className: ({ isActive }) => {
        const baseClasses = isMobile2 ? "text-4xl font-bold" : "text-sm font-medium";
        const activeClasses = "text-white";
        const inactiveClasses = "text-gray-300 hover:text-white";
        const isTestimonialsActive = link.to.includes("#testimonials") && isHomePage && location.hash === "#testimonials";
        const isContactActive = link.to.includes("/contact") && location.pathname.endsWith("/contact");
        const finalIsActive = link.to.includes("#testimonials") ? isTestimonialsActive : isActive || isContactActive;
        return `${baseClasses} transition-colors duration-300 ${isMobile2 ? "animate-fade-in-up" : ""} ${finalIsActive ? activeClasses : inactiveClasses}`;
      },
      style: { animationDelay: isMobile2 ? `${0.3 + index * 0.1}s` : "0s", opacity: isMobile2 ? 0 : 1 },
      children: link.label
    },
    link.label
  )) });
  const MobileMenu = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        onClick: () => setIsMobileMenuOpen(false),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-black/90 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`,
        "aria-modal": "true",
        role: "dialog",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-end p-4", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(false), className: "p-2 text-white", "aria-label": "Close menu", children: /* @__PURE__ */ jsx(CloseIcon, { className: "w-7 h-7" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-center h-full gap-8 px-12 pb-24 -mt-16", children: /* @__PURE__ */ jsx(NavItems, { isMobile: true }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-0 right-0 flex justify-center", children: /* @__PURE__ */ jsx(LangSwitcher, { ...langProps }) })
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? "bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent border-b border-transparent"}`, children: /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 flex items-center relative h-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
        Logo,
        {
          showText: (showLogoText || !isHomePage) && !isMobile,
          lang: lang || "en",
          onClick: handleLogoClick
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8", children: /* @__PURE__ */ jsx(NavItems, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(LangSwitcher, { ...langProps }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(true), className: "p-2 text-white", "aria-label": "Open menu", children: /* @__PURE__ */ jsx(MenuIcon, { className: "w-7 h-7" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, {})
  ] });
};
const Footer = () => {
  const { content, lang } = useAppContent();
  if (!content) {
    return null;
  }
  const { hero, contact_form, footer } = content;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-black/50 border-t border-white/10 py-8 px-4 sm:px-8 mt-auto backdrop-blur-sm relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4", children: [
      /* @__PURE__ */ jsx(Logo, { lang }),
      (footer == null ? void 0 : footer.copyright) && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400", children: [
        "© ",
        currentYear,
        " Oriello. ",
        footer.copyright
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 sm:gap-6", children: [
      hero.availability && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
          /* @__PURE__ */ jsx("span", { className: "animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-green-500" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-300 tracking-wider", children: hero.availability })
      ] }),
      contact_form.direct_email_address && /* @__PURE__ */ jsx(
        "a",
        {
          href: `mailto:${contact_form.direct_email_address}`,
          className: "text-sm text-gray-300 hover:text-white transition-colors",
          children: contact_form.direct_email_address
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.instagram.com/oriello.websites/",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Follow Oriello on Instagram",
          className: "text-gray-300 hover:text-white transition-colors",
          children: /* @__PURE__ */ jsx(InstagramIcon, { className: "w-6 h-6" })
        }
      )
    ] })
  ] }) });
};
const AppContentContext = createContext(null);
const useAppContent = () => {
  const context = useContext(AppContentContext);
  if (!context) {
    throw new Error("useAppContent must be used within a LanguageLayout");
  }
  return context;
};
const LanguageLayout = ({ initialContent }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState(
    initialContent || (typeof window !== "undefined" ? window.__INITIAL_CONTENT__ : null)
  );
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [submissionState, setSubmissionState] = useState("form");
  const [isMobileFormVisible, setIsMobileFormVisible] = useState(false);
  const supportedLanguages = ["en", "cs"];
  const currentLang = lang && supportedLanguages.includes(lang) ? lang : "en";
  useEffect(() => {
    if (typeof window !== "undefined" && window.__INITIAL_CONTENT__) {
      delete window.__INITIAL_CONTENT__;
    }
  }, []);
  useEffect(() => {
    if (lang && !supportedLanguages.includes(lang)) {
      const newPath = `/${currentLang}${location.pathname.substring(
        lang.length + 1
      )}${location.search}${location.hash}`;
      navigate(newPath, { replace: true });
    }
  }, [lang, currentLang, navigate, location]);
  useEffect(() => {
    var _a;
    document.documentElement.lang = currentLang;
    if (content && ((_a = content.meta) == null ? void 0 : _a.lang) === currentLang) {
      return;
    }
    const loadContent = async () => {
      setError(null);
      try {
        const response = await fetch(`/data/content.${currentLang}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`);
        }
        const data = await response.json();
        data.meta.lang = currentLang;
        setContent(data);
      } catch (e) {
        console.error(`Failed to load content for '${currentLang}':`, e);
        if (currentLang !== "en") {
          console.warn(`Falling back to 'en' content.`);
          const path = `/en${location.pathname.substring(
            currentLang.length + 1
          )}${location.search}${location.hash}`;
          navigate(path, { replace: true });
        } else {
          setError("Failed to load content. Please try again later.");
        }
      }
    };
    loadContent();
  }, [currentLang, content, navigate, location]);
  const handleLangChange = (newLang) => {
    if (newLang === currentLang) return;
    const { pathname } = location;
    const langPrefix = `/${currentLang}`;
    const basePath = pathname.substring(langPrefix.length);
    const newPath = `/${newLang}${basePath}`;
    navigate(newPath);
  };
  const mobileGradient = "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 75%)";
  const desktopGradient = "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 80%)";
  const showHeaderFooter = !isMobile || !isMobileFormVisible;
  return /* @__PURE__ */ jsx(AppContentContext.Provider, { value: { content, lang: currentLang }, children: /* @__PURE__ */ jsxs("main", { className: "bg-black text-white min-h-screen overflow-x-hidden relative flex flex-col", children: [
    content && showHeaderFooter && /* @__PURE__ */ jsx(
      Header,
      {
        navigationContent: content.navigation,
        langProps: {
          currentLang,
          onLangChange: handleLangChange
        },
        setSubmissionState
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-[5]",
        style: { background: isMobile ? mobileGradient : desktopGradient }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex-grow", children: [
      error && /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center text-center text-red-500 p-8", children: error }),
      !content && !error && /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center text-white", children: "Loading..." }),
      content && /* @__PURE__ */ jsx(
        Outlet,
        {
          context: {
            submissionState,
            setSubmissionState,
            isMobileFormVisible,
            setIsMobileFormVisible
          }
        }
      )
    ] }),
    content && showHeaderFooter && /* @__PURE__ */ jsx(Footer, {})
  ] }) });
};
const ContactForm = ({
  ctaPlaceholder,
  content,
  isExpanded,
  onExpansionChange,
  onSubmit,
  isSubmitting,
  isMobileFullScreen = false
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [formData, setFormData] = useState({
    vision: "",
    name: "",
    email: ""
  });
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [inputContainerClass, setInputContainerClass] = useState("overflow-hidden");
  const [buttonContainerClass, setButtonContainerClass] = useState("overflow-hidden");
  const animationTimeoutId = useRef(null);
  const isMounted = useRef(true);
  const placeholderMessages = content.placeholder_messages;
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setInputContainerClass("overflow-visible");
        setButtonContainerClass("overflow-visible");
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setInputContainerClass("overflow-hidden");
      setButtonContainerClass("overflow-hidden");
    }
  }, [isExpanded]);
  useEffect(() => {
    if (!isExpanded || isUserTyping || isMobile || isMobileFullScreen) {
      return;
    }
    setAnimatedPlaceholder("");
    let messageIndex = 0;
    let wordIndex = 0;
    const animate = () => {
      if (!placeholderMessages || placeholderMessages.length === 0) return;
      const currentMessageWords = placeholderMessages[messageIndex].split(" ");
      if (wordIndex < currentMessageWords.length) {
        setAnimatedPlaceholder(
          currentMessageWords.slice(0, wordIndex + 1).join(" ")
        );
        wordIndex++;
        animationTimeoutId.current = window.setTimeout(animate, 150);
      } else {
        animationTimeoutId.current = window.setTimeout(() => {
          setIsFadingOut(true);
          animationTimeoutId.current = window.setTimeout(() => {
            messageIndex = (messageIndex + 1) % placeholderMessages.length;
            wordIndex = 0;
            animate();
            setIsFadingOut(false);
          }, 400);
        }, 2e3);
      }
    };
    const startDelay = setTimeout(animate, 700);
    return () => {
      clearTimeout(startDelay);
      if (animationTimeoutId.current) {
        clearTimeout(animationTimeoutId.current);
      }
      setAnimatedPlaceholder("");
      setIsFadingOut(false);
    };
  }, [
    isExpanded,
    isUserTyping,
    placeholderMessages,
    isMobile,
    isMobileFullScreen
  ]);
  const handleFocus = () => {
    if (!isExpanded && !isMobileFullScreen) {
      onExpansionChange(true);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "vision" && e.target.value.length > 0 && !isUserTyping) {
      setIsUserTyping(true);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    onSubmit(formData).then(() => {
      if (isMounted.current) {
        setFormData({ vision: "", name: "", email: "" });
        setIsUserTyping(false);
      }
    }).catch((error) => {
      console.error("Submission failed in component:", error);
      if (isMounted.current) {
        alert("Sorry, something went wrong. Please try again.");
      }
    });
  };
  const isVisuallyExpanded = isExpanded || isMobileFullScreen;
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      action: `https://formsubmit.co/${content.direct_email_address}`,
      method: "POST",
      className: "w-full max-w-3xl mx-auto",
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "hidden",
            name: "_subject",
            value: content.subject || "New message from your portfolio"
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `
          relative rounded-2xl
          ${isMobileFullScreen ? "p-0 bg-transparent border-none shadow-none" : `bg-white/5 border border-white/10 ${!isMobile ? "backdrop-blur-md" : ""} transition-[padding,box-shadow] duration-700 ease-in-out ${isExpanded ? "p-6 sm:p-8 shadow-2xl" : "p-2"}`}
        `,
            children: [
              isVisuallyExpanded && !isMobileFullScreen && /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => onExpansionChange(false),
                  className: "absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300",
                  style: {
                    animation: "fade-in-up 0.8s ease-out forwards",
                    animationDelay: "0.5s",
                    opacity: 0
                  },
                  "aria-label": "Close form",
                  children: /* @__PURE__ */ jsx(CloseIcon, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `
            grid grid-cols-1 sm:grid-cols-2 gap-6
            ${isMobileFullScreen ? "mb-6" : `transition-all duration-500 ease-in-out ${isExpanded ? "" : inputContainerClass}`}
            ${isVisuallyExpanded ? "max-h-40 mb-6" : "max-h-0 mb-0"}
          `,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          value: formData.name,
                          onChange: handleChange,
                          className: "peer w-full bg-transparent border-b-2 border-white/20 p-3 text-white focus:outline-none focus:border-white/50 focus:shadow-[0_2px_10px_-2px_rgba(255,255,255,0.3)] transition",
                          placeholder: " ",
                          required: isExpanded,
                          "aria-hidden": !isExpanded
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "name",
                          className: "absolute left-3 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white/80",
                          children: content.name_label
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          value: formData.email,
                          onChange: handleChange,
                          className: "peer w-full bg-transparent border-b-2 border-white/20 p-3 text-white focus:outline-none focus:border-white/50 focus:shadow-[0_2px_10px_-2px_rgba(255,255,255,0.3)] transition",
                          placeholder: " ",
                          required: isExpanded,
                          "aria-hidden": !isExpanded
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "email",
                          className: "absolute left-3 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white/80",
                          children: content.email_label
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "vision",
                    value: formData.vision,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    placeholder: !isVisuallyExpanded ? ctaPlaceholder : isMobileFullScreen ? content.vision_placeholder_mobile || "" : "",
                    className: `
              w-full bg-transparent text-white placeholder-gray-400 text-lg
              border-2 rounded-xl focus:outline-none focus:ring-0
              resize-none text-left
              border-white/20 focus:border-white/50 focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]
              ${isMobileFullScreen ? "" : "transition-all duration-500 ease-in-out"}
              ${isVisuallyExpanded ? "h-48 p-4" : "h-14 pl-6 pr-16 py-4 overflow-hidden"}
            `,
                    autoComplete: "off",
                    rows: 1,
                    required: true
                  }
                ),
                isVisuallyExpanded && !isUserTyping && !isMobile && !isMobileFullScreen && animatedPlaceholder && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `absolute top-4 left-4 right-4 text-white/30 text-lg pointer-events-none transition-opacity duration-300 text-left ${isFadingOut ? "opacity-0" : "opacity-100"}`,
                    "aria-hidden": "true",
                    children: animatedPlaceholder.split(" ").map((word, i) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "inline-block animate-word-fade-in mr-1.5",
                        children: word
                      },
                      i
                    ))
                  }
                ),
                !isVisuallyExpanded && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-1/2 right-6 -translate-y-1/2 text-white/50 pointer-events-none",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx(SendIcon, { className: "w-6 h-6" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `
            ${isMobileFullScreen ? "mt-8" : `transition-all duration-500 ease-in-out ${isExpanded ? "" : buttonContainerClass}`}
            ${isVisuallyExpanded ? "max-h-40 mt-8" : "max-h-0 mt-0"}
          `,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-end gap-4 sm:gap-6", children: [
                    content.direct_email_prompt && content.direct_email_address && /* @__PURE__ */ jsxs(
                      "p",
                      {
                        className: "text-sm text-gray-400 order-2 sm:order-1",
                        "aria-hidden": !isVisuallyExpanded,
                        children: [
                          content.direct_email_prompt,
                          " ",
                          /* @__PURE__ */ jsx(
                            "a",
                            {
                              href: `mailto:${content.direct_email_address}`,
                              className: "text-white/80 hover:text-white underline",
                              children: content.direct_email_address
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "submit",
                        "aria-hidden": !isVisuallyExpanded,
                        disabled: isSubmitting,
                        className: "order-1 sm:order-2 w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] disabled:opacity-70 disabled:scale-100 disabled:cursor-wait",
                        children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx(BoltIcon, { className: "w-5 h-5 animate-spin" }),
                          /* @__PURE__ */ jsx("span", { children: content.sending_button })
                        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                          content.launch_button,
                          /* @__PURE__ */ jsx(SendIcon, { className: "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" })
                        ] })
                      }
                    )
                  ] })
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const backgroundItems = [
  // Images - using reliable, thematic images from Unsplash with responsive sizes
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    depth: 0.1,
    initialX: "75%",
    initialY: "10%",
    size: "w-[120px] h-[120px] md:w-[200px] md:h-[200px]",
    rotation: -15
  },
  // Spaced out on the left side for better balance.
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1608635361103-0d323bac82f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    depth: 0.3,
    initialX: "10%",
    initialY: "65%",
    size: "w-[100px] h-[100px] md:w-[180px] md:h-[180px]",
    rotation: 10
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    depth: 0.2,
    initialX: "80%",
    initialY: "75%",
    size: "w-[140px] h-[140px] md:w-[220px] md:h-[220px]",
    rotation: 5
  },
  // Moved from top-left to bottom-left to fill empty space and reduce clutter.
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1731505274678-9e2d2f381495?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    depth: 0.15,
    initialX: "50%",
    initialY: "90%",
    size: "w-[90px] h-[90px] md:w-[160px] md:h-[160px]",
    rotation: 20
  },
  // Repositioned to create more vertical space in the top-left.
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1627593561183-84a4d57b5e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRocmlmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    depth: 0.4,
    initialX: "20%",
    initialY: "20%",
    size: "w-[150px] h-[150px] md:w-[250px] md:h-[250px]",
    rotation: -5
  },
  // More interesting, "organic" glassmorphic shapes with responsive sizes
  // This item was moved from the horizontal center (50%) to the right to avoid text.
  {
    id: 6,
    type: "shape",
    depth: 0.5,
    initialX: "60%",
    initialY: "20%",
    size: "w-[130px] h-[130px] md:w-[200px] md:h-[200px]",
    rotation: 30,
    shapeClassName: "rounded-t-full rounded-b-[3rem]"
  },
  // Teardrop/pebble shape
  // Repositioned to de-clutter the top-left corner.
  {
    id: 7,
    type: "shape",
    depth: 0.25,
    initialX: "15%",
    initialY: "10%",
    size: "w-[160px] h-[160px] md:w-[250px] md:h-[250px]",
    rotation: -20,
    shapeClassName: "rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl"
  },
  // Leaf-like
  // This item was moved from the vertical center (50%) downwards to avoid text.
  {
    id: 8,
    type: "shape",
    depth: 0.35,
    initialX: "85%",
    initialY: "70%",
    size: "w-[110px] h-[110px] md:w-[180px] md:h-[180px]",
    rotation: 45,
    shapeClassName: "rounded-full"
  },
  // Keep a simple circle for variety
  // Shifted slightly to better balance the bottom-left corner.
  {
    id: 9,
    type: "shape",
    depth: 0.6,
    initialX: "5%",
    initialY: "80%",
    size: "w-[180px] h-[180px] md:w-[300px] md:h-[300px]",
    rotation: 10,
    shapeClassName: "rounded-l-full rounded-r-[4rem]"
  },
  // Pill-like
  {
    id: 10,
    type: "shape",
    depth: 0.1,
    initialX: "60%",
    initialY: "90%",
    size: "w-[90px] h-[90px] md:w-[150px] md:h-[150px]",
    rotation: -30,
    shapeClassName: "rounded-tl-2xl rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-2xl"
  }
  // Asymmetric blob
];
const Background = ({ isStatic = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const animationFrameId = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const itemsToRender = isStatic ? backgroundItems.filter((item) => item.type === "image").slice(0, 3) : backgroundItems;
  useEffect(() => {
    if (isStatic) {
      return;
    }
    const onScroll = () => {
      lastScrollY.current = window.scrollY;
      requestUpdate();
    };
    const onMouseMove = (event) => {
      lastPosition.current = { x: event.clientX, y: event.clientY };
      requestUpdate();
    };
    const requestUpdate = () => {
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(() => {
          setScrollY(lastScrollY.current);
          setMousePosition(lastPosition.current);
          animationFrameId.current = null;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isStatic]);
  const isBrowser = typeof window !== "undefined";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute top-0 left-0 w-full h-full z-0 overflow-hidden",
      "aria-hidden": "true",
      children: itemsToRender.map((item) => {
        let transform = `translate(-50%, -50%) rotate(${item.rotation}deg)`;
        if (!isStatic && isBrowser) {
          const moveX = (mousePosition.x - window.innerWidth / 2) * item.depth * 0.1;
          const moveY = (mousePosition.y - window.innerHeight / 2) * item.depth * 0.1;
          const scrollMoveY = scrollY * item.depth * 0.3;
          transform = `translate(-50%, -50%) translate3d(${moveX}px, ${moveY + scrollMoveY}px, 0) rotate(${item.rotation}deg)`;
        }
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `absolute ${!isStatic ? "transition-transform duration-500 ease-out" : ""} ${item.size}`,
            style: {
              top: item.initialY,
              left: item.initialX,
              transform
            },
            children: [
              item.type === "image" && /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.src,
                  alt: "",
                  draggable: "false",
                  className: `w-full h-full object-cover rounded-2xl shadow-lg opacity-75 ${isStatic ? "brightness-50" : ""}`
                }
              ),
              item.type === "shape" && /* @__PURE__ */ jsx(
                "div",
                {
                  className: `w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 ${item.shapeClassName}`
                }
              )
            ]
          },
          item.id
        );
      })
    }
  );
};
const iconComponents = {
  design: DesignIcon,
  code: CodeIcon,
  ux: UxIcon
};
const Hero = ({
  content,
  contactFormContent,
  isFormExpanded,
  onExpansionChange,
  onFormSubmit,
  isSubmitting
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const taglineDelay = 0.3;
  const availabilityDelay = 0.6;
  const descriptionDelay = 0.8;
  const tagsDelay = 1.4;
  const contactFormDelay = 1.8;
  const scrollPromptDelay = 2.2;
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onExpansionChange(false);
      }
    };
    if (isFormExpanded) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFormExpanded, onExpansionChange]);
  const handleScrollClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 text-center relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(Background, { isStatic: isMobile }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `grid text-center transition-[grid-template-rows] duration-500 ease-in-out ${isFormExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
              "aria-hidden": !isFormExpanded,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `overflow-hidden transition-opacity duration-300 ease-in-out ${isFormExpanded ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                  children: /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold text-white tracking-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] mb-8", children: contactFormContent.expanded_form_title })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `grid transition-[grid-template-rows] duration-500 ease-in-out ${isFormExpanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`,
              "aria-hidden": isFormExpanded,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `overflow-hidden transition-opacity duration-300 ease-in-out ${isFormExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                  children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.6))] transform-gpu", children: content.name }),
                      /* @__PURE__ */ jsx(
                        "h2",
                        {
                          className: "text-xl sm:text-2xl font-medium text-gray-300 tracking-wide [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] animate-fade-in-up",
                          style: { animationDelay: `${taglineDelay}s`, opacity: 0 },
                          children: content.tagline
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex items-center justify-center gap-3 animate-fade-in-up",
                          style: {
                            animationDelay: `${availabilityDelay}s`,
                            opacity: 0
                          },
                          children: [
                            /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
                              /* @__PURE__ */ jsx("span", { className: "animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                              /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-green-500" })
                            ] }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-300 tracking-wider", children: content.availability })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "max-w-2xl mx-auto text-base sm:text-lg text-gray-400 font-light [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] leading-relaxed animate-fade-in-up",
                          style: { animationDelay: `${descriptionDelay}s`, opacity: 0 },
                          children: content.description
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "flex flex-wrap items-center justify-center gap-3 pt-2 animate-fade-in-up",
                        style: { animationDelay: `${tagsDelay}s`, opacity: 0 },
                        children: content.tags.map((tag, index) => {
                          const Icon = iconComponents[tag.icon];
                          return /* @__PURE__ */ jsxs(
                            "div",
                            {
                              className: "flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300",
                              children: [
                                Icon && /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4 text-purple-300 -mt-px" }),
                                /* @__PURE__ */ jsx("span", { children: tag.label })
                              ]
                            },
                            index
                          );
                        })
                      }
                    )
                  ] })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-full transition-transform duration-700 ease-in-out ${isFormExpanded ? "mt-0" : "mt-6 animate-fade-in-up"}`,
              style: !isFormExpanded ? { animationDelay: `${contactFormDelay}s`, opacity: 0 } : {},
              children: /* @__PURE__ */ jsx(
                ContactForm,
                {
                  ctaPlaceholder: isMobile && contactFormContent.cta_placeholder_mobile ? contactFormContent.cta_placeholder_mobile : contactFormContent.cta_placeholder,
                  content: contactFormContent,
                  isExpanded: isFormExpanded,
                  onExpansionChange,
                  onSubmit: onFormSubmit,
                  isSubmitting
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute bottom-4 left-0 right-0 z-20 text-center animate-fade-in-up transition-opacity duration-500 ${isFormExpanded ? "opacity-50 hover:opacity-100" : "opacity-100"}`,
            style: { animationDelay: `${scrollPromptDelay}s`, opacity: 0 },
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#about",
                onClick: handleScrollClick,
                className: "inline-block",
                "aria-label": "Scroll to about section",
                children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-widest uppercase", children: content.scroll_down_prompt }),
                  /* @__PURE__ */ jsx(ArrowDownIcon, { className: "w-5 h-5 animate-bounce" })
                ] })
              }
            )
          }
        )
      ]
    }
  );
};
const About = ({ content }) => {
  if (!content) return null;
  return /* @__PURE__ */ jsx("section", { id: "about", className: "bg-black py-24 md:py-32 px-4 sm:px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col md:flex-row items-center gap-12 md:gap-16 animate-fade-in-up",
      style: { animationDelay: `0.2s`, opacity: 0 },
      children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-1/2 w-full lg:w-5/12", children: /* @__PURE__ */ jsx("div", { className: "bg-white/5 rounded-2xl p-2 border border-white/10 group shadow-2xl backdrop-blur-md", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: content.photo_url,
            alt: content.image_alt,
            className: "rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-in-out"
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 w-full lg:w-7/12 text-left", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold text-white mb-6 text-left", children: content.heading }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4 text-base lg:text-lg leading-relaxed max-w-prose", children: content.p1 }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-base lg:text-lg leading-relaxed max-w-prose", children: content.p2 })
        ] })
      ]
    }
  ) }) });
};
const Testimonials = ({ content }) => {
  if (!content) return null;
  const extractDomain = (url) => {
    if (!url || url.startsWith("#")) return "";
    try {
      const domain = new URL(url).hostname;
      return domain.replace(/^www\./, "");
    } catch (e) {
      console.error("Invalid URL for domain extraction:", url);
      return "";
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "testimonials", className: "bg-black py-24 md:py-32 px-4 sm:px-8 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-4xl md:text-5xl font-black mb-20 md:mb-24 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 animate-fade-in-up py-2",
        style: { opacity: 0 },
        children: content.title
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 gap-8 ${content.testimonials.length === 2 ? "lg:max-w-6xl lg:mx-auto" : "lg:grid-cols-3"}`, children: content.testimonials.map((testimonial, index) => {
      const domain = extractDomain(testimonial.projectUrl || "");
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "group relative bg-white/5 border border-white/10 rounded-2xl p-8 text-left animate-fade-in-up shadow-lg backdrop-blur-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-white/20",
          style: { animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 },
          children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-300 italic flex-grow", children: [
              '"',
              testimonial.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300 flex flex-col sm:flex-row items-start sm:justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center min-w-0", children: [
                /* @__PURE__ */ jsx("img", { src: testimonial.image, alt: testimonial.author, className: "w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0" }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: testimonial.author }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 min-h-[2.5rem]", children: testimonial.role })
                ] })
              ] }),
              domain && /* @__PURE__ */ jsxs(
                "a",
                {
                  href: testimonial.projectUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `View project for ${testimonial.author}`,
                  className: "group/link flex-shrink-0 w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/15 transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: domain }),
                    /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "w-4 h-4 text-gray-400 group-hover/link:text-white transition-colors" })
                  ]
                }
              )
            ] })
          ] })
        },
        index
      );
    }) })
  ] }) });
};
const iconMap$1 = {
  target: TargetIcon,
  handshake: PartnershipIcon,
  sparkles: QualityIcon
};
const HowItWorks = ({ content, lang, onCtaClick }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!content) return null;
  const handleCtaClick = () => {
    if (isMobile && onCtaClick) {
      onCtaClick();
    } else {
      navigate(`/${lang}/contact`);
    }
  };
  const statIcons = [
    /* @__PURE__ */ jsx(QualityIcon, { className: "w-8 h-8 text-purple-300" }, "icon-0"),
    /* @__PURE__ */ jsx(TargetIcon, { className: "w-8 h-8 text-purple-300" }, "icon-1"),
    /* @__PURE__ */ jsx(CheckmarkIcon, { className: "w-8 h-8 text-purple-300" }, "icon-2")
  ];
  return /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "bg-black/80 py-24 md:py-32 px-4 sm:px-8 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-24 md:space-y-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-4xl md:text-5xl font-black mb-16 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 animate-fade-in-up py-2", style: { opacity: 0, animationDelay: "0.2s" }, children: content.stats_section.title }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: content.stats_section.stats.map((stat, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 animate-fade-in-up transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 backdrop-blur-md",
          style: { animationDelay: `${0.4 + index * 0.15}s`, opacity: 0 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 bg-white/5 p-4 rounded-full border border-white/10", children: statIcons[index] }),
            /* @__PURE__ */ jsx("div", { className: "text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 py-2", children: stat.stat }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-base flex-grow", children: stat.description }),
            stat.sourceUrl && stat.source && /* @__PURE__ */ jsxs(
              "a",
              {
                href: stat.sourceUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-auto group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white",
                children: [
                  /* @__PURE__ */ jsx("span", { children: stat.source }),
                  /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" })
                ]
              }
            )
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-4xl md:text-5xl font-black mb-16 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 animate-fade-in-up py-2", style: { opacity: 0, animationDelay: "0.4s" }, children: content.why_me_section.title }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-12 mb-16", children: content.why_me_section.points.map((point, index) => {
        const Icon = iconMap$1[point.icon];
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 animate-fade-in-up",
            style: { animationDelay: `${0.6 + index * 0.15}s`, opacity: 0 },
            children: [
              Icon && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 bg-white/5 p-4 rounded-full border border-white/10", children: /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-purple-300 mx-auto" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-lg lg:text-xl leading-relaxed", children: point.description })
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "animate-fade-in-up text-center", style: { animationDelay: "1.2s", opacity: 0 }, children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleCtaClick,
          className: "group flex items-center justify-center gap-3 mx-auto px-8 py-4 bg-white text-black font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]",
          children: [
            content.why_me_section.cta,
            /* @__PURE__ */ jsx(ArrowRightIcon, { className: "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" })
          ]
        }
      ) })
    ] })
  ] }) });
};
const iconMap = {
  call: DiscoveryCallIcon,
  design: DesignIcon,
  develop: CodeIcon
};
const ThankYou = ({ content, availabilityStatus, onGoBack, isMobileSheet = false }) => {
  const isAvailable = availabilityStatus === "available";
  const message = isAvailable ? content.message_available : content.message_unavailable;
  return /* @__PURE__ */ jsx("div", { className: `flex flex-col items-center justify-center p-4 sm:p-8 text-center relative overflow-hidden ${isMobileSheet ? "py-6" : "min-h-screen pt-28 pb-12 sm:pt-32"}`, children: /* @__PURE__ */ jsxs("div", { className: "relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center animate-fade-in-up", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl w-full mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsx(CheckmarkIcon, { className: "w-16 h-16 sm:w-20 sm:h-20 text-green-400 mx-auto mb-6" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4", children: content.title }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed", children: message })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full animate-fade-in-up", style: { animationDelay: "0.3s", opacity: 0 }, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8 sm:mb-10", children: content.process_title }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-8 left-0 w-full h-px bg-white/10 hidden md:block", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8", children: content.process_steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          return /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center text-center max-w-[240px]", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 bg-black/50 backdrop-blur-sm p-4 rounded-full border border-white/10 mb-4", children: Icon && /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-purple-300" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg mb-1", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: step.description })
          ] }, index);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 sm:mt-16 animate-fade-in-up", style: { animationDelay: "0.6s", opacity: 0 }, children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onGoBack,
        className: "group flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:bg-white/20 border border-white/20",
        children: [
          /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" }),
          content.back_button
        ]
      }
    ) })
  ] }) });
};
const usePageTitle = (title, lang) => {
  useEffect(() => {
    if (document.title !== title) {
      document.title = title;
    }
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [title, lang]);
};
const WorkCollage = ({ content, lang }) => {
  const navigate = useNavigate();
  if (!content || !content.images || content.images.length === 0 || !content.view_projects_cta) {
    return null;
  }
  const handleCtaClick = () => {
    navigate(`/${lang}/projects`);
  };
  const images = [...content.images, ...content.images];
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden bg-black py-24 md:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]", children: /* @__PURE__ */ jsx("div", { className: "flex w-max animate-infinite-scroll", children: images.map((image, index) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: image.src,
        alt: image.alt,
        className: "h-96 w-auto object-cover",
        loading: "lazy"
      }
    ) }, index)) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/80" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-4", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-4xl md:text-5xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 animate-fade-in-up py-2",
          style: { opacity: 0, animationDelay: "0.2s" },
          children: content.title
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "animate-fade-in-up",
          style: { opacity: 0, animationDelay: "0.4s" },
          children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleCtaClick,
              className: "group flex items-center justify-center gap-3 mx-auto px-8 py-4 bg-white text-black font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]",
              children: [
                content.view_projects_cta,
                /* @__PURE__ */ jsx(ArrowRightIcon, { className: "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" })
              ]
            }
          )
        }
      )
    ] })
  ] });
};
const MobileContactSheet = ({
  isOpen,
  onClose,
  onSubmit,
  onGoBack,
  submissionState,
  contactFormContent,
  thankYouContent,
  availabilityStatus
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    // Main container: fixed overlay, vertically centered, high z-index
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center p-6 animate-fade-in-up",
        role: "dialog",
        "aria-modal": "true",
        children: submissionState === "success" ? (
          // Thank You screen is already centered, just constrain width
          /* @__PURE__ */ jsx("div", { className: "w-full max-w-md overflow-y-auto max-h-full", children: /* @__PURE__ */ jsx(
            ThankYou,
            {
              content: thankYouContent,
              availabilityStatus,
              onGoBack,
              isMobileSheet: true
            }
          ) })
        ) : (
          // Wrapper for form content, will be centered
          /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white text-center mb-8", children: contactFormContent.expanded_form_title }),
            /* @__PURE__ */ jsx(
              ContactForm,
              {
                isMobileFullScreen: true,
                ctaPlaceholder: contactFormContent.cta_placeholder_mobile ?? contactFormContent.cta_placeholder ?? "What's your vision?",
                content: contactFormContent,
                isExpanded: true,
                onExpansionChange: () => {
                },
                onSubmit,
                isSubmitting: submissionState === "submitting"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "group flex items-center justify-center gap-2 px-6 py-3 text-white/70 font-bold rounded-lg transition-all duration-300 ease-in-out hover:text-white mx-auto",
                "aria-label": "Go back",
                children: [
                  /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" }),
                  /* @__PURE__ */ jsx("span", { children: contactFormContent.back_button || "Back" })
                ]
              }
            ) })
          ] })
        )
      }
    )
  );
};
const HomePage = ({ contactOpen = false }) => {
  const { content, lang } = useAppContent();
  const location = useLocation();
  const {
    submissionState,
    setSubmissionState,
    isMobileFormVisible,
    setIsMobileFormVisible
  } = useOutletContext();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isDesktopFormExpanded, setIsDesktopFormExpanded] = useState(false);
  usePageTitle(
    content ? `Oriello - ${content.hero.tagline}` : "Oriello - Digital Craftsmanship",
    lang
  );
  useEffect(() => {
    if (contactOpen) {
      if (isMobile) {
        setIsMobileFormVisible(true);
      } else {
        setIsDesktopFormExpanded(true);
      }
      setSubmissionState("form");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [contactOpen, isMobile, setSubmissionState, setIsMobileFormVisible]);
  useEffect(() => {
    if (isMobileFormVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileFormVisible]);
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);
  if (!content) return null;
  const handleExpansionRequest = (expand) => {
    if (isMobile) {
      setIsMobileFormVisible(expand);
    } else {
      setIsDesktopFormExpanded(expand);
    }
  };
  const handleFormSubmit = async (formData) => {
    var _a;
    setSubmissionState("submitting");
    if (!((_a = content == null ? void 0 : content.contact_form) == null ? void 0 : _a.direct_email_address)) {
      console.error("Recipient email address is not configured.");
      alert("Configuration error: Cannot send message.");
      setSubmissionState("form");
      return;
    }
    const { direct_email_address: recipientEmail, subject } = content.contact_form;
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${recipientEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            ...formData,
            _subject: subject || `New message from your portfolio`
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Form submission success:", data);
        setSubmissionState("success");
        if (!isMobile) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        const data = await response.json();
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        `Sorry, an error occurred: ${error.message}. Please try emailing ${recipientEmail} directly.`
      );
      setSubmissionState("form");
    }
  };
  const handleGoBack = () => {
    setIsDesktopFormExpanded(false);
    setIsMobileFormVisible(false);
    setSubmissionState("form");
  };
  if (submissionState === "success" && content.thank_you && !isMobile) {
    return /* @__PURE__ */ jsx(
      ThankYou,
      {
        content: content.thank_you,
        availabilityStatus: content.hero.availability_status,
        onGoBack: handleGoBack
      }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        content: content.hero,
        contactFormContent: content.contact_form,
        isFormExpanded: isDesktopFormExpanded,
        onExpansionChange: handleExpansionRequest,
        onFormSubmit: handleFormSubmit,
        isSubmitting: submissionState === "submitting"
      }
    ),
    /* @__PURE__ */ jsx(About, { content: content.about }),
    /* @__PURE__ */ jsx(Testimonials, { content: content.testimonials }),
    /* @__PURE__ */ jsx(WorkCollage, { content: content.work_collage, lang }),
    /* @__PURE__ */ jsx(
      HowItWorks,
      {
        content: content.how_it_works,
        lang,
        onCtaClick: () => handleExpansionRequest(true)
      }
    ),
    /* @__PURE__ */ jsx(
      MobileContactSheet,
      {
        isOpen: isMobileFormVisible,
        onClose: () => handleExpansionRequest(false),
        onSubmit: handleFormSubmit,
        onGoBack: handleGoBack,
        submissionState,
        contactFormContent: content.contact_form,
        thankYouContent: content.thank_you,
        availabilityStatus: content.hero.availability_status
      }
    )
  ] });
};
const Projects = ({ content }) => {
  if (!content || !content.projects) {
    return /* @__PURE__ */ jsx("section", { id: "projects", className: "min-h-screen flex items-center justify-center bg-black", children: /* @__PURE__ */ jsx("p", { children: "Project data is not available." }) });
  }
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "relative bg-black w-full overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-4xl md:text-5xl font-black mb-16 md:mb-24 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 animate-fade-in-up py-2",
        style: { opacity: 0 },
        children: content.title
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-16 md:space-y-32", children: content.projects.map((project, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `
                bg-white/5 border border-white/10 rounded-2xl shadow-lg
                md:bg-transparent md:border-none md:shadow-none
                flex flex-col md:flex-row md:items-center gap-0 md:gap-12
                animate-fade-in-up
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `,
        style: { opacity: 0, animationDelay: `${index * 0.2}s` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "md:w-1/2 relative group", children: /* @__PURE__ */ jsxs("a", { href: project.projectUrl, target: "_blank", rel: "noopener noreferrer", "aria-label": `View project: ${project.title}`, children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-t-2xl md:rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: project.imageUrl,
                alt: `Showcase for ${project.title}`,
                className: "w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 rounded-t-2xl md:rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out", children: /* @__PURE__ */ jsx("div", { className: "p-4 border-2 border-white rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-in-out", children: /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "w-8 h-8 text-white" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: `md:w-1/2 text-left p-6 md:p-0 ${index % 2 !== 0 ? "md:pr-8" : "md:pl-8"}`, children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold text-white mb-4", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 text-base lg:text-lg leading-relaxed", children: project.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-3 mb-8", children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm text-gray-200 font-medium", children: tag }, tag)) }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: project.projectUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group/link inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white text-black font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 shadow-lg",
                children: [
                  /* @__PURE__ */ jsx("span", { children: (content == null ? void 0 : content.view_project_cta) || "View Project" }),
                  /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "w-5 h-5 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1" })
                ]
              }
            )
          ] })
        ]
      },
      project.title
    )) })
  ] }) });
};
const ProjectsPage = () => {
  const { content, lang } = useAppContent();
  usePageTitle(content ? `${content.projects.title} - Oriello` : "Projects - Oriello", lang);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!content) return null;
  return /* @__PURE__ */ jsx(Projects, { content: content.projects });
};
const getInitialLanguage = () => {
  if (typeof navigator === "undefined") {
    return "en";
  }
  const supportedLanguages = ["en", "cs"];
  if (navigator.languages && navigator.languages.length) {
    for (const lang of navigator.languages) {
      const primaryLang = lang.split("-")[0];
      if (supportedLanguages.includes(primaryLang)) {
        return primaryLang;
      }
    }
  }
  if (navigator.language) {
    const primaryLang = navigator.language.split("-")[0];
    if (supportedLanguages.includes(primaryLang)) {
      return primaryLang;
    }
  }
  return "en";
};
const App = ({ initialContent }) => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/",
        element: /* @__PURE__ */ jsx(Navigate, { to: `/${getInitialLanguage()}`, replace: true })
      }
    ),
    /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(LanguageLayout, { initialContent }), children: [
      /* @__PURE__ */ jsx(Route, { path: "/:lang", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/:lang/projects", element: /* @__PURE__ */ jsx(ProjectsPage, {}) }),
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "/:lang/contact",
          element: /* @__PURE__ */ jsx(HomePage, { contactOpen: true })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "*",
        element: /* @__PURE__ */ jsx(Navigate, { to: `/${getInitialLanguage()}`, replace: true })
      }
    )
  ] });
};
function render(url, content) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, { initialContent: content }) }) })
  );
}
export {
  render
};
