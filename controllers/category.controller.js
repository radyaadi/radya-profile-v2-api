import Catergory from '../models/category.model.js';

export const getAllCatergories = async (req, res) => {
  try {
    const catergories = await Catergory.find().sort({
      name: 'asc',
    });
    return res.json({ success: true, data: catergories });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getCatergoryById = async (req, res) => {
  const { catergoryId } = req.params;

  try {
    const catergory = await Catergory.findById(catergoryId);
    return res.json({ success: true, data: catergory });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createCatergory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCatergory = new Catergory({ name });
    await newCatergory.save();

    return res.json({
      success: true,
      message: 'New catergory successfully added!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCatergory = async (req, res) => {
  const { catergoryId } = req.params;
  const { name } = req.body;

  try {
    await Catergory.findByIdAndUpdate(catergoryId, { name });
    return res.json({
      success: true,
      message: 'Catergory successfully updated!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCatergory = async (req, res) => {
  const { catergoryId } = req.params;

  try {
    await Catergory.findByIdAndDelete(catergoryId);
    return res.json({
      success: true,
      message: 'Catergory successfully deleted!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
