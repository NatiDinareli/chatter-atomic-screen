
import React from 'react';
import CaseInfo from '../atoms/CaseInfo';
import { AlertTriangle, Calendar, FileText } from 'lucide-react';

interface CaseInfoPanelProps {
  caseId: string;
  riskScore: number;
  date: string;
  type: string;
}

const CaseInfoPanel: React.FC<CaseInfoPanelProps> = ({
  caseId,
  riskScore,
  date,
  type
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <CaseInfo
        caseId={caseId}
        title="Nível de Risco"
        value={`${riskScore}%`}
        icon={<AlertTriangle className="h-4 w-4 text-destructive" />}
      />
      <CaseInfo
        caseId={caseId}
        title="Data de Análise"
        value={date}
        icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
      />
      <CaseInfo
        caseId={caseId}
        title="Tipo de Caso"
        value={type}
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
};

export default CaseInfoPanel;
