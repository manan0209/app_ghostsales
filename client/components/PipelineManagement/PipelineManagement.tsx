"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDashboard } from "../../contexts/DashboardContext"
import AIRecommendations from "./AIRecommendations"

interface Lead {
  id: string
  name: string
  status: string
  nextFollowUp: string
  interactions: number
  lastInteraction: string
}

interface Stage {
  id: string
  title: string
  leads: Lead[]
}

const PipelineManagement: React.FC = () => {
  const [stages, setStages] = useState<Stage[]>([])
  const { userRole } = useDashboard()

  useEffect(() => {
    // Simulating fetching pipeline data
    const fetchPipelineData = async () => {
      // In a real implementation, this would be an API call
      const mockStages: Stage[] = [
        {
          id: "new",
          title: "New",
          leads: [
            {
              id: "lead1",
              name: "John Doe",
              status: "New",
              nextFollowUp: "2023-07-15",
              interactions: 2,
              lastInteraction: "2023-07-10",
            },
            {
              id: "lead2",
              name: "Jane Smith",
              status: "New",
              nextFollowUp: "2023-07-16",
              interactions: 1,
              lastInteraction: "2023-07-09",
            },
          ],
        },
        {
          id: "contacted",
          title: "Contacted",
          leads: [
            {
              id: "lead3",
              name: "Bob Johnson",
              status: "Contacted",
              nextFollowUp: "2023-07-18",
              interactions: 3,
              lastInteraction: "2023-07-12",
            },
          ],
        },
        {
          id: "negotiation",
          title: "Negotiation",
          leads: [
            {
              id: "lead4",
              name: "Alice Brown",
              status: "Negotiation",
              nextFollowUp: "2023-07-20",
              interactions: 5,
              lastInteraction: "2023-07-14",
            },
          ],
        },
        {
          id: "closed",
          title: "Closed",
          leads: [
            {
              id: "lead5",
              name: "Charlie Wilson",
              status: "Closed",
              nextFollowUp: "2023-07-22",
              interactions: 7,
              lastInteraction: "2023-07-15",
            },
          ],
        },
      ]
      setStages(mockStages)
    }

    fetchPipelineData()
  }, [])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    const sourceStage = stages.find((stage) => stage.id === source.droppableId)
    const destStage = stages.find((stage) => stage.id === destination.droppableId)

    if (!sourceStage || !destStage) {
      return
    }

    const newSourceLeads = Array.from(sourceStage.leads)
    const [movedLead] = newSourceLeads.splice(source.index, 1)

    if (source.droppableId === destination.droppableId) {
      newSourceLeads.splice(destination.index, 0, movedLead)
      const newStages = stages.map((stage) =>
        stage.id === sourceStage.id ? { ...stage, leads: newSourceLeads } : stage,
      )
      setStages(newStages)
    } else {
      const newDestLeads = Array.from(destStage.leads)
      newDestLeads.splice(destination.index, 0, { ...movedLead, status: destStage.title })
      const newStages = stages.map((stage) => {
        if (stage.id === sourceStage.id) {
          return { ...stage, leads: newSourceLeads }
        }
        if (stage.id === destStage.id) {
          return { ...stage, leads: newDestLeads }
        }
        return stage
      })
      setStages(newStages)
    }
  }

  const addNewStage = () => {
    const newStageId = `stage${stages.length + 1}`
    const newStage: Stage = {
      id: newStageId,
      title: `New Stage ${stages.length + 1}`,
      leads: [],
    }
    setStages([...stages, newStage])
  }

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Pipeline Management</h2>
        {(userRole === "admin" || userRole === "manager") && (
          <Button
            onClick={addNewStage}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Stage
          </Button>
        )}
      </div>
      <AIRecommendations stages={stages} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {stages.map((stage) => (
            <Droppable key={stage.id} droppableId={stage.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-800 p-4 rounded-lg min-w-[250px] w-1/4"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">{stage.title}</h3>
                  {stage.leads.map((lead, index) => (
                    <Draggable key={lead.id} draggableId={lead.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-700 p-3 mb-2 rounded-md shadow-md"
                        >
                          <h4 className="font-medium text-white">{lead.name}</h4>
                          <p className="text-sm text-gray-400">Status: {lead.status}</p>
                          <p className="text-sm text-gray-400">Next Follow-up: {lead.nextFollowUp}</p>
                          <p className="text-sm text-gray-400">Interactions: {lead.interactions}</p>
                          <p className="text-sm text-gray-400">Last Interaction: {lead.lastInteraction}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default PipelineManagement

