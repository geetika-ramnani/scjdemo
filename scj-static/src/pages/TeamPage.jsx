import { motion } from "framer-motion";
import {
  Binoculars, // scouts
  Map, // distribution
  ShieldCheck, // rights/licensing
  Handshake, // partnerships
  ServerCog, // backend
  Users,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const TeamPage = () => {
  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-5xl font-bold mb-4"
        >
          Our Team
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-yellow-400 italic mb-12"
        >
          Behind every frame, there’s a force.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          We are a collective of dreamers, strategists, and doers. From seasoned
          industry veterans who have shaped global entertainment deals to fresh
          creative minds brimming with bold ideas — our team brings together the
          perfect blend of experience and innovation.
        </motion.p>
      </div>

      {/* Team Sections */}
      <div className="max-w-6xl mx-auto grid gap-12">
        {/* Content Scouts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Binoculars className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-semibold">Content Scouts</h2>
          </div>
          <p className="text-gray-300 mb-4">
            The eyes that spot the next big success.
          </p>
          <p className="text-yellow-400 font-medium">
            Sreepathy, Himank, Prashant, Kanav
          </p>
        </motion.div>

        {/* Distribution Architects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Map className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-semibold">Distribution Architects</h2>
          </div>
          <p className="text-gray-300 mb-4">
            The strategists who map out where content will thrive.
          </p>
          <p className="text-yellow-400 font-medium">Dimple, Vibhas</p>
        </motion.div>

        {/* Rights & Licensing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-semibold">
              Rights & Licensing Experts
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            The guardians who ensure creators are always protected.
          </p>
          <p className="text-yellow-400 font-medium">Sudhir Chandra Joshi</p>
        </motion.div>

        {/* Partnership Builders */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-semibold">Partnership Builders</h2>
          </div>
          <p className="text-gray-300 mb-4">
            The connectors who link us to platforms, brands, and broadcasters.
          </p>
          <p className="text-yellow-400 font-medium">
            Mrs. Mukta Priyadarshani
          </p>
        </motion.div>

        {/* Backend Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <ServerCog className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-semibold">Backend Team</h2>
          </div>
          <p className="text-gray-300 mb-4">
            The tech minds powering our platform.
          </p>
          <p className="text-yellow-400 font-medium">
            {/* Replace with dynamic intern list */}
            Intern Names, Position, Department
          </p>
        </motion.div>
      </div>

      {/* Closing */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mt-20"
      >
        <p className="text-xl text-gray-300 leading-relaxed">
          Together, we don’t just work in entertainment — <br />
          <span className="text-yellow-400 font-semibold">we live it.</span>
        </p>
      </motion.div>
    </div>
  );
};

export default TeamPage;
