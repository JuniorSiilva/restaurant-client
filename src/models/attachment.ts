enum AttachmentType {
  IMAGE = 'IMAGE',

  VIDEO = 'VIDEO',
}

interface Attachment {
  id: number

  uniqid: string

  name: string

  descriptions: string

  type: AttachmentType

  url: string

  created_at: string

  updated_at: string
}

export { Attachment, AttachmentType }
