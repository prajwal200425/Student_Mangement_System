import Student from "../Models/Student.js";

export const AddStudent = async (req, res) => {
  try {
    const { fullName, age, address, contact, email, department } = req.body;

    if (!fullName) {
      return res.status(400).json({ message: "FullName is Required." });
    }
    if (!age) {
      return res.status(400).json({ message: "Age is Required." });
    }
    if (!address) {
      return res.status(400).json({ message: "Address is Required." });
    }
    if (!contact) {
      return res.status(400).json({ message: "Cantact is Required." });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is Required." });
    }
    if (!department) {
      return res.status(400).json({ message: "Department is Required." });
    }

    const addStud = new Student({
      fullName,
      age,
      address,
      contact,
      email,
      department,
      userId:req.user.id
    });

    const SavedData = await addStud.save();
    return res
      .status(200)
      .json({ message: "Student Added", SavedData ,userId:req.user.id});
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const getStudents = await Student.find({userId:req.user.id});

    if (!getStudents) {
      return res.status(404).json({ message: "Students Data not found" });
    }

    return res.status(200).json({
      message:"Student Record is : ",
      getStudents
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const getStudent = await Student.findById(id);

    if (!getStudent) {
      return res.status(404).json({ message: "Students Data not found" });
    }

    return res
      .status(200)
      .json({ message: "Specific Student Record", getStudent });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const studExist = await Student.findById(id);

    if (!studExist) {
      return res.status(404).json({ message: "Student Not found" });
    }

    const update = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Student Updated.", update });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const checkExist = await Student.findById(id);

    if (!checkExist) {
      return res.status(404).json({ message: "Student Not found" });
    }

    const deletedStud = await Student.findByIdAndDelete(id);
    return res.status(200).json({ message: "Student Deleted", deletedStud });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
