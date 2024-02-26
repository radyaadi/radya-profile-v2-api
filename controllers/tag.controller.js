import Tag from '../models/tag.model.js';

export const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find().sort({
      name: 'asc',
    });
    return res.json({ success: true, data: tags });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getTagById = async (req, res) => {
  const { tagId } = req.params;

  try {
    const tag = await Tag.findById(tagId);
    return res.json({ success: true, data: tag });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createTag = async (req, res) => {
  const { name } = req.body;

  try {
    const newTag = new Tag({ name });
    await newTag.save();

    return res.json({ success: true, message: 'New tag successfully added!' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTag = async (req, res) => {
  const { tagId } = req.params;
  const { name } = req.body;

  try {
    await Tag.findByIdAndUpdate(tagId, { name });
    return res.json({ success: true, message: 'Tag successfully updated!' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTag = async (req, res) => {
  const { tagId } = req.params;

  try {
    await Tag.findByIdAndDelete(tagId);
    return res.json({ success: true, message: 'Tag successfully deleted!' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
