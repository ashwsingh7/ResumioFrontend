import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Resumio Upload';
  readonly subtitle = 'Upload a file once and let the app handle chunking and completion';
  readonly chunkSize = signal(5*1024*1024);
  readonly selectedFile = signal<File | null >(null);
  readonly uploadId = signal<string | null>(null);
  readonly isUploading = signal(false);
  readonly errorMesage = signal('');
  readonly selectedFileName = computed(()=> this.selectedFile()?.name ?? 'No file selected');
  readonly selectedFileSize = computed(()=>this.formatBytes(this.selectedFile()?.size ?? 0));

  formatBytes(bytes:number){
    if(!bytes){
      return '0 B';
    }

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    
  }
}
