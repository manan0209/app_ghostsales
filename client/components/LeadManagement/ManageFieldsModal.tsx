import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

interface CustomField {
  id: string
  name: string
  type: "text" | "dropdown" | "number"
}

interface ManageFieldsModalProps {
  isOpen: boolean
  onClose: () => void
  customFields: CustomField[]
  onSaveFields: (fields: CustomField[]) => void
}

const ManageFieldsModal: React.FC<ManageFieldsModalProps> = ({ isOpen, onClose, customFields, onSaveFields }) => {
  const [fields, setFields] = useState<CustomField[]>(customFields)

  const addField = () => {
    setFields([...fields, { id: Date.now().toString(), name: "", type: "text" }])
  }

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id))
  }

  const updateField = (id: string, key: keyof CustomField, value: string) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, [key]: value } : field)))
  }

  const handleSave = () => {
    onSaveFields(fields)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Manage Custom Fields</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {fields.map((field) => (
            <div key={field.id} className="flex items-center space-x-2">
              <Input
                value={field.name}
                onChange={(e) => updateField(field.id, "name", e.target.value)}
                placeholder="Field Name"
                className="flex-grow bg-gray-700 text-white"
              />
              <Select value={field.type} onValueChange={(value) => updateField(field.id, "type", value)}>
                <SelectTrigger className="w-[180px] bg-gray-700 text-white">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="dropdown">Dropdown</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="destructive" size="icon" onClick={() => removeField(field.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={addField} className="mt-4">
          <Plus className="mr-2 h-4 w-4" /> Add Field
        </Button>
        <DialogFooter>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ManageFieldsModal

