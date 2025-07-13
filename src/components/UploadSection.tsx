import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Image, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const fileList = Array.from(e.dataTransfer.files);
    const validFiles = fileList.filter(file => 
      file.type === "application/pdf" || file.type.startsWith("image/")
    );

    if (validFiles.length !== fileList.length) {
      toast({
        title: t('upload.invalidFileType'),
        description: t('upload.invalidFileTypeDesc'),
        variant: "destructive"
      });
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      toast({
        title: t('upload.uploadSuccess'),
        description: t('upload.uploadSuccessDesc', { count: validFiles.length })
      });
    }
  }, [toast]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    setFiles(prev => [...prev, ...fileList]);
    toast({
      title: "Files uploaded successfully!",
      description: `${fileList.length} file(s) ready for processing.`
    });
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Upload Your Resume
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drop your resume file here or click to browse. We support PDF files and image formats (JPG, PNG).
            </p>
          </div>

          <Card className="overflow-hidden bg-card shadow-card">
            <CardContent className="p-8">
              <div
                className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  dragActive
                    ? "border-primary-magic bg-primary-magic/5"
                    : "border-border hover:border-primary-magic/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept=".pdf,image/*"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-primary-magic/10 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary-magic" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      Drop files here or click to upload
                    </h3>
                    <p className="text-muted-foreground">
                      Support for PDF, JPG, PNG files up to 10MB each
                    </p>
                  </div>

                  <Button variant="magic" size="lg">
                    Choose Files
                  </Button>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-foreground">Uploaded Files:</h4>
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-accent rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {file.type === "application/pdf" ? (
                            <FileText className="w-5 h-5 text-red-500" />
                          ) : (
                            <Image className="w-5 h-5 text-blue-500" />
                          )}
                          <span className="text-sm font-medium text-foreground">
                            {file.name}
                          </span>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="magic" size="lg" className="w-full">
                      Process {files.length} File{files.length > 1 ? 's' : ''} with AI Magic
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;